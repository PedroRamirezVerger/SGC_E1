package com.example.backend.controllers;

import java.util.List;
import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.Arrays;
import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import sun.misc.BASE64Decoder;
import sun.misc.BASE64Encoder;

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

    public String encriptar(String texto) {
	String value = "";
	try {
	    cipher = Cipher.getInstance(algoritmo);
	    cipher.init(Cipher.ENCRYPT_MODE, key);
	    byte[] textobytes = texto.getBytes();
	    byte[] cipherbytes = cipher.doFinal(textobytes);
	    value = new BASE64Encoder().encode(cipherbytes);
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
    * @param texto Texto encriptado
    * @return String texto desencriptado
    */
       public String desencriptar( String texto ){
           String str="";        
           try {
               byte[] value = new BASE64Decoder().decodeBuffer(texto);                 
               cipher = Cipher.getInstance( algoritmo );            
               cipher.init( Cipher.DECRYPT_MODE, key );
               byte[] cipherbytes = cipher.doFinal( value );
               str = new String( cipherbytes );                                  
           } catch (InvalidKeyException ex) {
               System.err.println( ex.getMessage() );
           }  catch (IllegalBlockSizeException ex) {
               System.err.println( ex.getMessage() );
           } catch (BadPaddingException ex) {
               System.err.println( ex.getMessage() );            
           }   catch (IOException ex) {
               System.err.println( ex.getMessage() );
           }catch (NoSuchAlgorithmException ex) {
               System.err.println( ex.getMessage() );
           } catch (NoSuchPaddingException ex) {
               System.err.println( ex.getMessage() );
           }
           return str;
       }

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
     * 
     * @param dni
     * @param password
     * @return
     */
    @GetMapping("/usuarios/{dni}/{password}") 
    public RespuestaLogin validateLogin(@PathVariable("dni") String dni, @PathVariable("password") String password) {
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
     */
    @PostMapping("/usuarios")
    public Usuario registrarUsuario(@Valid @RequestBody Usuario usuario) {
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
