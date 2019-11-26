package com.example.backend.models.entity;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(value = "roles")
public class Rol {

	@Id
	private ObjectId _id;
	private String nombre;
	private List<String> privilegios;

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
	public List<String> getPrivilegios() {
		return privilegios;
	}
	public void setPrivilegios(List<String> privilegios) {
		this.privilegios = privilegios;
	}
}
