package com.example.backend.models.entity;

import java.util.Date;


public class Gerente extends Usuario{
	
	
	public Gerente(String dni, String password, String tipo, String nombre, String apellidos, String direccion, String telefono,
			String email, String sexo, Date fechaNacimiento) {
		super(dni, password, tipo, nombre, apellidos, direccion, telefono, email, sexo, fechaNacimiento);
		
	}

	
}
