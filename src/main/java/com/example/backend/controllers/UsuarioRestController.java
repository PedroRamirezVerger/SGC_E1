package com.example.backend.controllers;

import java.util.List;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.Arrays;
import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
//import sun.misc.BASE64Decoder;
//import sun.misc.BASE64Encoder;
import java.util.Base64;
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
import com.example.backend.models.respuesta.RespuestaUsuariosGestor;
import com.example.backend.models.services.IUsuarioService;

//@CrossOrigin(value = "https://sgcequipo1.herokuapp.com") 
@CrossOrigin(value = "http://localhost:4200") // PARA DESARROLLO
@RestController
@RequestMapping("api")
public class UsuarioRestController {

    @Autowired
    private IUsuarioService usuarioService;
    private SecretKey key;
    private Cipher cipher;
    private String algoritmo = "AES";
    private int keysize = 16;
    private String clave = "seguridad";

    /**
     * Crea la Llave para encriptar/desencriptar
     * 
     * @param String value
     */
    public void addKey(String value) {
	byte[] valuebytes = value.getBytes();
	key = new SecretKeySpec(Arrays.copyOf(valuebytes, keysize), algoritmo);
    }

    public String encriptar(String texto) throws UnsupportedEncodingException {
	String value = "";
	try {
	    cipher = Cipher.getInstance(algoritmo);
	    cipher.init(Cipher.ENCRYPT_MODE, key);
	    byte[] textobytes = texto.getBytes("utf-8");
	    byte[] cipherbytes = cipher.doFinal(textobytes);
	    // value = new BASE64Encoder().encode(cipherbytes);
	    value = Base64.getEncoder().encodeToString(cipherbytes);
	} catch (NoSuchAlgorithmException ex) {
	    System.err.println(ex.getMessage());
	} catch (NoSuchPaddingException ex) {
	    System.err.println(ex.getMessage());
	} catch (InvalidKeyException ex) {
	    System.err.println(ex.getMessage());
	} catch (IllegalBlockSizeException ex) {
	    System.err.println(ex.getMessage());
	} catch (BadPaddingException ex) {
	    System.err.println(ex.getMessage());
	}
	return value;
    }

    /**
     * Metodo para desencriptar un texto
     * 
     * @param texto Texto encriptado
     * @return String texto desencriptado
     * @throws UnsupportedEncodingException
     */
    public String desencriptar(String texto) throws UnsupportedEncodingException {
	String str = "";
	try {
	    // byte[] value = new BASE64Decoder().decodeBuffer(texto);
	    byte[] value = Base64.getDecoder().decode(texto.getBytes("utf-8"));
	    cipher = Cipher.getInstance(algoritmo);
	    cipher.init(Cipher.DECRYPT_MODE, key);
	    byte[] cipherbytes = cipher.doFinal(value);
	    str = new String(cipherbytes);
	} catch (InvalidKeyException ex) {
	    System.err.println(ex.getMessage());
	} catch (IllegalBlockSizeException ex) {
	    System.err.println(ex.getMessage());
	} catch (BadPaddingException ex) {
	    System.err.println(ex.getMessage());
	} catch (NoSuchAlgorithmException ex) {
	    System.err.println(ex.getMessage());
	} catch (NoSuchPaddingException ex) {
	    System.err.println(ex.getMessage());
	}
	return str;
    }

    public Usuario desencriptarUsuario(Usuario usuario) throws UnsupportedEncodingException {
	addKey(clave);
	usuario.setDni(desencriptar(usuario.getDni()));
	usuario.setNombre(desencriptar(usuario.getNombre()));
	usuario.setApellidos(desencriptar(usuario.getApellidos()));
	usuario.setSexo(desencriptar(usuario.getSexo()));
	usuario.setTipo(desencriptar(usuario.getTipo()));
	return usuario;
    }

    @GetMapping("/usuarios")
    public List<Usuario> getAllUsers() throws UnsupportedEncodingException {
		List<Usuario> listaUsuarios = usuarioService.findAll();
		List<Usuario> listaUsuariosDesencriptados = new ArrayList<Usuario>();
		for(Usuario u : listaUsuarios){
			u.setDni(desencriptar(u.getDni()));
			// TODO crear metodo para encriptar y desencriptar usuarios
				u.setNombre(desencriptar(u.getNombre()));
				u.setApellidos(desencriptar(u.getApellidos()));
				u.setTelefono(desencriptar(u.getTelefono()));
				u.setEmail(desencriptar(u.getEmail()));
				u.setDireccion(desencriptar(u.getDireccion()));
				u.setTipo(desencriptar(u.getTipo()));
				u.setPassword(desencriptar(u.getPassword()));
				u.setSexo(desencriptar(u.getSexo()));
				u.setMedico(desencriptar(u.getMedico()));
				u.setLocalidad(desencriptar(u.getLocalidad()));
				u.setEspecialidad(desencriptar(u.getEspecialidad()));
				u.setCentroMedico(desencriptar(u.getCentroMedico()));
				listaUsuariosDesencriptados.add(u);
		}
    	return listaUsuariosDesencriptados;
    }

    @GetMapping("/usuarios/{id}")
    public Usuario getUserById(@PathVariable("id") String id) {
	return usuarioService.findUserById(id);
    }

    /**
     * validar el login del usuario
     * 
     * @param dni
     * @param password
     * @return
     * @throws UnsupportedEncodingException
     */
    @GetMapping("/usuarios/{dni}/{password}")
    public RespuestaLogin validateLogin(@PathVariable("dni") String dni, @PathVariable("password") String password) throws UnsupportedEncodingException {
	RespuestaLogin respuestaLogin = new RespuestaLogin();
	List<Usuario> listaUsuarios = usuarioService.findAll();
	addKey(clave);
	dni = encriptar(dni);
	password = encriptar(password);
	for (Usuario u : listaUsuarios) {
	    if (u.getDni().equals(dni) && u.getPassword().equals(password)) {
		u.setDni(desencriptar(u.getDni()));
		u.setNombre(desencriptar(u.getNombre()));
		u.setApellidos(desencriptar(u.getApellidos()));
		u.setTelefono(desencriptar(u.getTelefono()));
		u.setEmail(desencriptar(u.getEmail()));
		u.setDireccion(desencriptar(u.getDireccion()));
		u.setTipo(desencriptar(u.getTipo()));
		u.setPassword(desencriptar(u.getPassword()));
		u.setSexo(desencriptar(u.getSexo()));
		u.setMedico(desencriptar(u.getMedico()));
		u.setLocalidad(desencriptar(u.getLocalidad()));
		u.setEspecialidad(desencriptar(u.getEspecialidad()));
		u.setCentroMedico(desencriptar(u.getCentroMedico()));
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
     * 
     * @param usuario
     * @return
     * @throws UnsupportedEncodingException
     */
    // TODO Encriptar los dotos que faltan
    @PostMapping("/usuarios")
    public Usuario registrarUsuario(@Valid @RequestBody Usuario usuario) throws UnsupportedEncodingException {
	usuario.set_id(ObjectId.get());
	addKey(clave);
	usuario.setDni(encriptar(usuario.getDni()));
	usuario.setNombre(encriptar(usuario.getNombre()));
	usuario.setApellidos(encriptar(usuario.getApellidos()));
	usuario.setTelefono(encriptar(usuario.getTelefono()));
	usuario.setEmail(encriptar(usuario.getEmail()));
	usuario.setDireccion(encriptar(usuario.getDireccion()));
	usuario.setTipo(encriptar(usuario.getTipo()));
	usuario.setPassword(encriptar(usuario.getPassword()));
	usuario.setSexo(encriptar(usuario.getSexo()));
	usuario.setMedico(encriptar(usuario.getMedico()));
	usuario.setLocalidad(encriptar(usuario.getLocalidad()));
	usuario.setEspecialidad(encriptar(usuario.getEspecialidad()));
	usuario.setCentroMedico(encriptar(usuario.getCentroMedico()));
	usuarioService.saveUser(usuario);
	return usuario;
    }

    /**
     * Modificar la contraseña del usuario
     * 
     * @param password
     * @throws UnsupportedEncodingException
     */
    @PutMapping("/usuarios/password/{id}")
    public Usuario modificarPassword(@PathVariable("id") ObjectId id, @Valid @RequestBody Usuario usuario)
	    throws UnsupportedEncodingException {
	usuario.set_id(id);
	addKey(clave);
	usuario.setPassword(encriptar(usuario.getPassword()));
	usuarioService.saveUser(usuario);
	return usuario;

    }

    /**
     * Modificar los datos de contacto del usuario
     * 
     * @param teléfono
     * @param modificarDatosContacto
     * @throws UnsupportedEncodingException
     */
    @PutMapping("/usuarios/datosContacto/{id}")
    public Usuario modificarDatosContacto(@PathVariable("id") ObjectId id, @Valid @RequestBody Usuario usuario) throws UnsupportedEncodingException {
	usuario.set_id(id);
	addKey(clave);
	usuario.setTelefono(encriptar(usuario.getTelefono()));
	usuario.setEmail(encriptar(usuario.getEmail()));
	usuario.setDireccion(encriptar(usuario.getDireccion()));
	usuarioService.saveUser(usuario);
	return usuario;
    }

    /**
     * Modificar los datos de personales del usuario
     * 
     * @param modificarDatosPersonales
     * @throws UnsupportedEncodingException
     */
    @PutMapping("/usuarios/datospersonales/{id}")
    public Usuario modificarDatosPersonales(@PathVariable("id") ObjectId id, @Valid @RequestBody Usuario usuario)
	    throws UnsupportedEncodingException {
	usuario.set_id(id);
	addKey(clave);
	usuario.setNombre(encriptar(usuario.getNombre()));
	usuario.setApellidos(encriptar(usuario.getApellidos()));
	usuario.setSexo(encriptar(usuario.getSexo()));
	usuario.setTipo(encriptar(usuario.getTipo()));
	usuarioService.saveUser(usuario);
	return usuario;

    }

}
