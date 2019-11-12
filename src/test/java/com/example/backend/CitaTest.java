package com.example.backend;

import com.example.backend.models.entity.Cita;
import com.example.backend.models.entity.Usuario;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CitaTest {
	Usuario usuario;
	String medico;
	String fecha;
	
	@Given("^Usuario en pagina de pedir cita$")
	public void usuario_en_pagina_de_pedir_cita() throws Throwable {
	    usuario=new Usuario();
	}

	@When("^Medico correcto$")
	public void medico_correcto() throws Throwable {
		medico="Jose Luis";
	}

	@When("^Fecha correcta$")
	public void fecha_correcta() throws Throwable {
	    fecha="20-12-2019";
	}

	@Then("^Mensaje de cita creada correctamente$")
	public void mensaje_de_cita_creada_correctamente() throws Throwable {
	   Cita cita=new Cita();
	}

	@When("^Fecha incorrecta$")
	public void fecha_incorrecta() throws Throwable {
	    fecha="";
	}

	@Then("^Mensaje de cita creada incorrectamente$")
	public void mensaje_de_cita_creada_incorrectamente() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	}

}
