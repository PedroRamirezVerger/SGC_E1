package com.example.backend.controllers;

import java.util.List;

import javax.validation.Valid;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.models.entity.Usuario;
import com.example.backend.models.respuesta.RespuestaLogin;
import com.example.backend.models.services.IUsuarioService;
import com.mongodb.util.JSON;

// @CrossOrigin(value = "https://sgcequipo1.herokuapp.com") 
@CrossOrigin(value = "http://localhost:4200") // PARA DESARROLLO
@RestController
@RequestMapping("api")
public class UsuarioRestController {

    @Autowired
    private IUsuarioService usuarioService;

    @GetMapping("/usuarios")
    public List<Usuario> getAllUsers() {
	return usuarioService.findAll();
    }
    
    @GetMapping("/usuarios/{id}")
    public Usuario getUserById(@PathVariable("id") String id) {
    	return usuarioService.findUserById(id);
    }

    /**
     * validar el login del usuario
     * @param dni
     * @param password
     * @return
     */
    @GetMapping("/usuarios/{dni}/{password}") 
    public RespuestaLogin validateLogin(@PathVariable("dni") String dni, @PathVariable("password") String password) {
    	RespuestaLogin respuestaLogin = new RespuestaLogin();
    	List<Usuario> listaUsuarios = usuarioService.findAll();
		for (Usuario u : listaUsuarios) {
		    if (u.getDni().equals(dni) && u.getPassword().equals(password)) {
		    	respuestaLogin.setUsuario(u);
		    	respuestaLogin.setLoginPasado(true); 
		    	break;
		    } else {
		    	respuestaLogin.setLoginPasado(false); 
		    }
		}
		return respuestaLogin;
    }

    /**
     * registrar al usuario
     * @param usuario
     * @return
     */
    @PostMapping("/usuarios") 
    public Usuario registrarUsuario(@Valid @RequestBody Usuario usuario) {
		usuario.set_id(ObjectId.get());
		usuarioService.saveUser(usuario);
		return usuario;
    }
    
   
    /** 
     * Modificar los datos de contacto del usuario
     * @param teléfono
     * @param modificarDatosContacto
     */
    @PutMapping("/usuarios/{id}")
    public Usuario modificarDatosContacto(@PathVariable("id") ObjectId id, @Valid @RequestBody Usuario usuario) {
    	usuario.set_id(id);
    	usuarioService.saveUser(usuario);
    	return usuario;
    	
    }
    

}
