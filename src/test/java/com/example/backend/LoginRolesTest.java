package com.example.backend;

import java.util.Date;

import org.junit.Assert;

import com.example.backend.models.entity.Usuario;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginRolesTest {
	Date fecha = new Date(95, 20, 12);
	Usuario pepe = new Usuario();
	Usuario prueba = new Usuario();

	@Given("^Introduzco un usuario$")
	public void introduzco_un_usuario() {
		pepe.setDni("00000000C");
		pepe.setPassword("Contraseña123");
		pepe.setTipo("PACIENTE");
		pepe.setNombre("Pepe");
		pepe.setApellidos("Palotes");
		pepe.setDireccion("calle 123");
		pepe.setTelefono("666666666");
		pepe.setEmail("prueba@prueba.com");
		pepe.setSexo("Hombre");
		pepe.setLocalidad("Ciudad Real");
		pepe.setCentroMedico("Virgen de La Salud");
		pepe.setMedico("Juan Palomares");
		pepe.setFechaNacimiento(fecha);

	}

	@When("^dni correcto$")
	public void dni_correcto(String dni) {
		pepe.getDni().equals(dni);
	}

	@When("^contraseña correcta$")
	public void contraseña_correcta(String password) {
		pepe.getPassword().equals(password);
		}

	@When("^tipo es <PACIENTE>$")
	public void tipo_es_PACIENTE() {
		pepe.getTipo().equals("PACIENTE");
	}

	@Then("^usuario logeado como paciente$")
	public void usuario_logeado_como_paciente() {
		prueba.setTipo("PACIENTE");
		Assert.assertEquals(prueba.getTipo(), pepe.getTipo());
	}

	@When("^tipo es <MEDICO>$")
	public void tipo_es_MEDICO() {
		prueba.setTipo("MEDICO");
		pepe.setTipo("MEDICO");
	}

	@Then("^usuario logeado como medico$")
	public void usuario_logeado_como_medico() {
		Assert.assertEquals(prueba.getTipo(), pepe.getTipo());
	}

	@When("^tipo es <GESTOR>$")
	public void tipo_es_GESTOR() {
		prueba.setTipo("GESTOR");
		pepe.setTipo("GESTOR");
	}

	@Then("^usuario logeado como gestor$")
	public void usuario_logeado_como_gestor() {
		Assert.assertEquals(prueba.getTipo(), pepe.getTipo());
	}

}
