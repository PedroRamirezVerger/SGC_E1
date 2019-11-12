package com.example.backend;

import com.example.backend.controllers.UsuarioRestController;
import com.example.backend.models.entity.Usuario;
import com.example.backend.models.respuesta.RespuestaLogin;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginTest {
	private Usuario usuario;
	private String dni;
	private String pwd;
	private RespuestaLogin respuesta;
	
	@Given("^Usuario en pagina de login$")
	public void Usuario_en_pagina_de_login() {
		usuario=new Usuario();
	}

	@When("^Credenciales correctas$")
	public void Credenciales_correctas() {
		dni="70358169L";
		pwd="contraseña";
		usuario.setNombre(dni);
		usuario.setPassword(pwd);
	}

	@Then("^Mensaje de bienvenida al login$")
	public void Mensaje_de_bienvenida_al_login() {
	
	}

	@When("^Nombre de usuario incorrecto$")
	public void Nombre_de_usuario_incorrecto() {
		dni="noexiste";
		pwd="1234";
		usuario.setNombre(dni);
		usuario.setPassword(pwd);
	}
	
	@When("^Password incorrecta$")
	public void Contrase_a_incorrecta() {
		dni="70358169L";
		pwd="12345";
		usuario.setNombre(dni);
		usuario.setPassword(pwd);
		
	}
	@Then("^Mensaje de error al login$")
	public void Mensaje_de_error_al_login() {
		//assertFalse(usuariocontroller.validateLogin(usuario.getDni(),usuario.getPassword()));
	}

	
}
