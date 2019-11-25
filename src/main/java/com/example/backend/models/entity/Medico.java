package com.example.backend.models.entity;

import java.util.Date;




public class Medico extends Usuario {

    private Especialidad especialidad;
    //calendario
    
    public Medico( Especialidad especialidad) {
	super();
	this.especialidad = especialidad;
    }

	public Medico() {
		// TODO Auto-generated constructor stub
	}


	public Especialidad getEspecialidad() {
	return especialidad;
    }

    public void setEspecialidad(Especialidad especialidad) {
	this.especialidad = especialidad;
    }

   
}
