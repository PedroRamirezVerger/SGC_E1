package com.example.backend.models.entity;

import java.util.Date;

import org.springframework.data.annotation.Id;

public class Cita {
	@Id
	private int id;
	
	private Paciente paciente;
	private Medico medico;
	private Date fecha;
	private String hora;
	private CentroSalud centroSalud;
	private int consulta;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Paciente getPaciente() {
		return paciente;
	}
	public void setPaciente(Paciente paciente) {
		this.paciente = paciente;
	}
	public Medico getMedico() {
		return medico;
	}
	public void setMedico(Medico medico) {
		this.medico = medico;
	}
	public Date getFecha() {
		return fecha;
	}
	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}
	public String getHora() {
		return hora;
	}
	public void setHora(String hora) {
		this.hora = hora;
	}
	public CentroSalud getCentroSalud() {
		return centroSalud;
	}
	public void setCentroSalud(CentroSalud centroSalud) {
		this.centroSalud = centroSalud;
	}
	public int getConsulta() {
		return consulta;
	}
	public void setConsulta(int consulta) {
		this.consulta = consulta;
	}
	
	
}
