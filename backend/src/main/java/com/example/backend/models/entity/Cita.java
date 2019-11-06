package com.example.backend.models.entity;

import java.util.Date;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(value = "citas")
public class Cita {
	
	@Id
	private ObjectId _id;
	
	private String dniPaciente;
	private String dniMedico;
	private Date fecha;
	private Date hora;
	private String centroSalud;
	private int consulta;
	
	public String get_id() {
		return _id.toHexString();
	}
	public void set_id(ObjectId _id) {
		this._id = _id;
	}
	public String getDniPaciente() {
		return dniPaciente;
	}
	public void setDniPaciente(String dniPaciente) {
		this.dniPaciente = dniPaciente;
	}
	public String getDniMedico() {
		return dniMedico;
	}
	public void setDniMedico(String dniMedico) {
		this.dniMedico = dniMedico;
	}
	public Date getFecha() {
		return fecha;
	}
	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}
	public Date getHora() {
		return hora;
	}
	public void setHora(Date hora) {
		this.hora = hora;
	}
	public String getCentroSalud() {
		return centroSalud;
	}
	public void setCentroSalud(String centroSalud) {
		this.centroSalud = centroSalud;
	}
	public int getConsulta() {
		return consulta;
	}
	public void setConsulta(int consulta) {
		this.consulta = consulta;
	}
	
	

}
