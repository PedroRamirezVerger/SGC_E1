package com.example.backend.models.entity;

import java.util.Stack;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



@Document(value = "centros_salud")

public class CentroSalud {
	
	private String nombre;
	private String localidad;
	private Stack<Medico> medicos;
	
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getLocalidad() {
		return localidad;
	}
	public void setLocalidad(String localidad) {
		this.localidad = localidad;
	}
	public Stack<Medico> getMedicos() {
		return medicos;
	}
	public void setMedicos(Stack<Medico> medicos) {
		this.medicos = medicos;
	}
	public void AddMedico(Medico medico) {
		medicos.add(medico);
	}
	public void DeleteMedico(Medico medico) {
		medicos.remove(medico);
	}
}