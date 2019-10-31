package com.example.backend.models.entity;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(value = "medicos")
public class Medico extends Usuario {
	
	@Id
	private ObjectId _id;
	
	private String nombre;
	private String apellido;
	private String email;
	private String telefono;
	private Especialidad especialidad;
	private CentroSalud centrosalud;
	
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
	public String getApellido() {
		return apellido;
	}
	public void setApellido(String apellido) {
		this.apellido = apellido;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getTelefono() {
		return telefono;
	}
	public void setTelefono(String telefono) {
		this.telefono = telefono;
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
