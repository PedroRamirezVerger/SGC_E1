package com.example.backend.controllers;

import java.util.List;

import javax.validation.Valid;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.models.entity.Usuario;
import com.example.backend.models.services.IUsuarioService;

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
	
	@GetMapping("/usuarios/{dni}")
	public Usuario getUserByDni(@PathVariable("dni") String dni) {
		return usuarioService.findUserByDni(dni);
	}
	
	@GetMapping("/usuarios/{dni}/{password}")
	public boolean validateLogin(@PathVariable("dni") String dni, @PathVariable("password") String password) {
		boolean loginPasado = false;
		List<Usuario> listaUsuarios = usuarioService.findAll();
		for(Usuario u: listaUsuarios) {
			if(u.getDni().equalsIgnoreCase(dni) && u.getPassword().equalsIgnoreCase(password)) {
				loginPasado = true;
				break;
			} else {
				loginPasado = false;
			}
		}
		return loginPasado;
	}
	
	
	@PostMapping("/usuarios")
	public Usuario registrarUsuario(@Valid @RequestBody Usuario usuario) {
		usuario.set_id(ObjectId.get());
		usuarioService.saveUser(usuario);
		return usuario;
	}
	
	
	
}
