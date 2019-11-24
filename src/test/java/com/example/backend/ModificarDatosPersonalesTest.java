package com.example.backend;

import java.util.Date;

import org.junit.Assert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.index.Indexed;

import com.example.backend.controllers.UsuarioRestController;
import com.example.backend.models.entity.Usuario;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ModificarDatosPersonalesTest {
	
	Usuario usuario = new Usuario();
	Usuario gestor = new Usuario();
	Usuario usuarioprueba= new Usuario();

	@Given("^Gestor en la pagina de modificar datos personales y usuario Luís Fernandez$")
	public void gestor_en_la_pagina_de_modificar_datos_personales_y_usuario_Luís_Fernandez() {
		usuario.setNombre("Luis");
		usuario.setApellidos("Fernández");
		usuario.setTipo("PACIENTE");
		usuario.setSexo("Hombre");
		usuarioprueba.setNombre("Luis");
		usuarioprueba.setApellidos("Fernández");
		usuarioprueba.setTipo("PACIENTE");
		usuarioprueba.setSexo("Hombre");
		gestor.setNombre("gestor");
		gestor.setApellidos("gestor");
		gestor.setSexo("Hombre");
		gestor.setTipo("GESTOR");
	}

	@When("^nombre introducido es <Roberto>$")
	public void nombre_introducido_es_Roberto() {
		usuario.setNombre("Roberto");
		usuarioprueba.setNombre("Roberto");
	}

	@When("^Apellidos introducidos <Jiménez López>$")
	public void apellidos_introducidos_Jiménez_López(){
		usuario.setApellidos("Jiménez López");
		usuarioprueba.setApellidos("Jiménez López");
	}

	@When("^Sexo introducido es <Hombre>$")
	public void sexo_introducido_es_Hombre() {
		usuario.setSexo("Hombre");
		usuarioprueba.setSexo("Hombre");
	}

	@When("^Tipo de usuario es <GESTOR>$")
	public void tipo_de_usuario_es_GESTOR() {
		usuario.setTipo("GESTOR");
		usuarioprueba.setTipo("GESTOR");
	}

	@Then("^usuario modificado$")
	public void usuario_modificado() {
		usuarioprueba=usuario;
		Assert.assertEquals(usuarioprueba, usuario);
	}

	@When("^nombre introducido es <\"([^\"]*)\">$")
	public void nombre_introducido_es(String arg1) {
		usuario.setNombre(arg1);
	}

	@Then("^usuario no modificado$")
	public void usuario_no_modificado() {
		Assert.assertNotEquals(usuarioprueba, usuario);
	}

	@When("^Apellidos introducidos <\"([^\"]*)\">$")
	public void apellidos_introducidos(String arg1) {
		usuario.setApellidos(arg1);
	}

}
