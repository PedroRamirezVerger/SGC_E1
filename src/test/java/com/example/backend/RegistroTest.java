package com.example.backend;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;

import com.example.backend.models.entity.Usuario;

import cucumber.api.java.en.And;

public class RegistroTest {
	Usuario usuario;
	String dni;
	String nombre;
	String apellidos;
	String pwd;
	String fecha;
	String sexo;
	String email;
	String telefono;
	
	@Given("^Usuario en pagina de registro$")
	public void usuario_en_pagina_de_registro() throws Throwable {
	    usuario=new Usuario();
	}

	@When("^dni correcto$")
	public void dni_correcto() throws Throwable {
	    dni="70358169L";
	
	}

	@When("^contraseña correcta$")
	public void contraseña_correcta() throws Throwable {
	    pwd="contraseña";
	}

	@When("^nombre correcto$")
	public void nombre_correcto() throws Throwable {
	    nombre="Manuel";
	}

	@When("^apellidos correctos$")
	public void apellidos_correctos() throws Throwable {
	   apellidos="Puente Díaz";
	}

	@When("^fecha de nacimiento correcta$")
	public void fecha_de_nacimiento_correcta() throws Throwable {
	    fecha="30-04-1996";
	}

	@When("^sexo correcto$")
	public void sexo_correcto() throws Throwable {
	    fecha="Hombre";
	}

	@When("^telefono correcto$")
	public void telefono_correcto() throws Throwable {
	    telefono="647858965";
	}

	@When("^email correcto$")
	public void email_correcto() throws Throwable {
	   email="Manuel@uclm.es";
	}

	@Then("^usuario registrado$")
	public void usuario_registrado() throws Throwable {
	    
	}


	@When("^contraseña incorrecta$")
	public void contraseña_incorrecta() throws Throwable {
		pwd="";
	}

	@Then("^usuario no registrado$")
	public void usuario_no_registrado() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	}

	@When("^dni incorrecto$")
	public void dni_incorrecto() throws Throwable {
		dni="";
	}

	@When("^email incorrecto$")
	public void email_incorrecto() throws Throwable {
		email="";
	}

	@When("^telefono incorrecto$")
	public void telefono_incorrecto() throws Throwable {
	   telefono="";
	}


}
