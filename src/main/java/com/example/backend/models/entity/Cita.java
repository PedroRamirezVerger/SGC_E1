package com.example.backend.models.entity;

import java.text.SimpleDateFormat;

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
    private String consulta;
    private String especialidad;

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

    public String getConsulta() {
	return consulta;
    }

    public void setConsulta(String consulta) {
	this.consulta = consulta;
    }

    public String getEspecialidad() {
	return especialidad;
    }

    public void setEspecialidad(String especialidad) {
	this.especialidad = especialidad;
    }
}
