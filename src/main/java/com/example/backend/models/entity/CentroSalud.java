package com.example.backend.models.entity;

import java.util.ArrayList;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



@Document(value = "centros_salud")

public class CentroSalud {
	@Id ObjectId _id;
	
	private String nombre;
	private String localidad;
	private ArrayList<Medico> medicos;
	
	
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
	public String getLocalidad() {
		return localidad;
	}
	public void setLocalidad(String localidad) {
		this.localidad = localidad;
	}
	public ArrayList<Medico> getMedicos() {
		return medicos;
	}
	public void setMedicos(ArrayList<Medico> medicos) {
		this.medicos = medicos;
	}
	public void AddMedico(Medico medico) {
		medicos.add(medico);
	}
	public void DeleteMedico(Medico medico) {
		medicos.remove(medico);
	}
}