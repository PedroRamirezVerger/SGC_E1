package com.example.backend.models.utiles;

import java.io.UnsupportedEncodingException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Base64;
import java.util.List;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

import com.example.backend.models.entity.Usuario;

public class Encriptar {
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

	public Usuario encriptarUsuarios(Usuario usuario) throws UnsupportedEncodingException {
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
		//usuario.setFechaNacimiento(encriptar(usuario.getFechaNacimiento().toString()));
		return usuario;
	}

	public Usuario desencriptarUsuarios(Usuario usuario) throws UnsupportedEncodingException {
		usuario.setDni(desencriptar(usuario.getDni()));
		usuario.setNombre(desencriptar(usuario.getNombre()));
		usuario.setApellidos(desencriptar(usuario.getApellidos()));
		usuario.setTelefono(desencriptar(usuario.getTelefono()));
		usuario.setEmail(desencriptar(usuario.getEmail()));
		usuario.setDireccion(desencriptar(usuario.getDireccion()));
		usuario.setTipo(desencriptar(usuario.getTipo()));
		usuario.setPassword(desencriptar(usuario.getPassword()));
		usuario.setSexo(desencriptar(usuario.getSexo()));
		usuario.setMedico(desencriptar(usuario.getMedico()));
		usuario.setLocalidad(desencriptar(usuario.getLocalidad()));
		usuario.setEspecialidad(desencriptar(usuario.getEspecialidad()));
		usuario.setCentroMedico(desencriptar(usuario.getCentroMedico()));
		return usuario;

	}
}
