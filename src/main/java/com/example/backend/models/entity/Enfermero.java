package com.example.backend.models.entity;

import java.util.Date;


public class Enfermero extends Usuario{
	
	private CentroSalud centrosalud;

	public Enfermero(String dni, String password, String tipo, String nombre, String apellidos, String direccion, String telefono,
			String email, String sexo, Date fechaNacimiento, CentroSalud centrosalud) {
		super(dni, password, tipo, nombre, apellidos, direccion, telefono, email, sexo, fechaNacimiento);
		this.centrosalud=centrosalud;
	}
	
	
	
	public CentroSalud getCentrosalud() {
		return centrosalud;
	}
	public void setCentrosalud(CentroSalud centrosalud) {
		this.centrosalud = centrosalud;
	}
}
