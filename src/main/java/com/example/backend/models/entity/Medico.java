package com.example.backend.models.entity;

import java.util.Date;

import javax.validation.constraints.Email;

import org.bson.types.ObjectId;

public class Medico { // extends Usuario{

    private String especialidad;
    private String centroMedico;
    
    /**
     * obtener un medico
     * @param _id
     * @param dni
     * @param password
     * @param tipo
     * @param nombre
     * @param apellidos
     * @param direccion
     * @param telefono
     * @param email
     * @param sexo
     * @param fechaNacimiento
     * @param especialidad
     * @param centroMedico
     */
    public Medico(ObjectId _id, String dni, String password, String tipo, String nombre, String apellidos,  
	    String direccion, String telefono, @Email String email, String sexo, Date fechaNacimiento,
	    String especialidad, String centroMedico) {
	// super(_id, dni, password, tipo, nombre, apellidos, direccion, telefono,
	// email, sexo, fechaNacimiento);
	this.especialidad = especialidad;
	this.centroMedico = centroMedico;
    }

    public String getEspecialidad() {
	return especialidad;
    }

    public void setEspecialidad(String especialidad) {
	this.especialidad = especialidad;
    }

    public String getCentroMedico() {
	return centroMedico;
    }

    public void setCentroMedico(String centroMedico) {
	this.centroMedico = centroMedico;
    }

}
