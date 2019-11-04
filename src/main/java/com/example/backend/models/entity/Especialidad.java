package com.example.backend.models.entity;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

//@Document(value="especialidades")
public class Especialidad {
	@Id ObjectId _id;
	
	private String nombre;
	private int duracionCita;
	
	public String get_id() {
		return _id.toHexString();
	}
	public void set_id(ObjectId _id) {
		this._id = _id;
	}
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
