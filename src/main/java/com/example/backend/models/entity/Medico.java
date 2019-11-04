package com.example.backend.models.entity;

import java.util.Date;


public class Medico extends Usuario {
	private Especialidad especialidad;
	private CentroSalud centrosalud;
	
	
	public Medico(String dni, String password, String tipo, String nombre, String apellidos, String direccion, String telefono,
			String email, String sexo, Date fechaNacimiento, Especialidad especialidad, CentroSalud centroSalud) {
		super(dni, password, tipo, nombre, apellidos, direccion, telefono, email, sexo, fechaNacimiento);
		this.especialidad=especialidad;
		this.centrosalud=centroSalud;
	}

	public Especialidad getEspecialidad() {
		return especialidad;
	}
	public void setEspecialidad(Especialidad especialidad) {
		this.especialidad = especialidad;
	}
	public CentroSalud getCentrosalud() {
		return centrosalud;
	}
	public void setCentrosalud(CentroSalud centrosalud) {
		this.centrosalud = centrosalud;
	}
}
