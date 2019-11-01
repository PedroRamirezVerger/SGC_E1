package com.example.backend.models.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

//@Document(value="especialidades")
public class Especialidad {
	
	private String nombre;
	private int duracionCita;
	
	
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public int getDuracionCita() {
		return duracionCita;
	}
	public void setDuracionCita(int duracionCita) {
		this.duracionCita = duracionCita;
	}
	
}
