package com.example.backend.models.entity;

import java.util.ArrayList;
import java.util.Date;



public class Paciente extends Usuario{
	private Medico medicoCabecera;
	private ArrayList<Cita> citas;
	
	public Paciente(String dni, String password, String tipo, String nombre, String apellidos, String direccion, String telefono,
			String email, String sexo, Date fechaNacimiento, Medico medicaoCabecera, ArrayList<Cita> citas) {
		super(dni, password, tipo, nombre, apellidos, direccion, telefono, email, sexo, fechaNacimiento);
		this.medicoCabecera=medicaoCabecera;
		this.citas=citas;
	}

	public Medico getMedicoCabecera() {
		return medicoCabecera;
	}
	public void setMedicoCabecera(Medico medicoCabecera) {
		this.medicoCabecera = medicoCabecera;
	}
	public ArrayList<Cita> getCitas() {
		return citas;
	}
	public void setCitas(ArrayList<Cita> citas) {
		this.citas = citas;
	}
	
	public void pedirCita() {
		
	}
	public void borrarCita() {
		
	}
	public void modificarCita(){
		
	}
}
