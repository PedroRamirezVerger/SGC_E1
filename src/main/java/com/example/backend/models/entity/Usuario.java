package com.example.backend.models.entity;

import java.util.Date;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(value="usuarios")
public class Usuario {
	
	@Id ObjectId _id;
	
	protected String dni;
	protected String password;
	protected String tipo;
	private String nombre;
	private String apellidos;
	private String direccion;
	private String telefono;
	private String email;
	private String sexo;
	private Date fechaNacimiento;
	
	public Usuario(String dni, String password, String tipo, String nombre, String apellidos,String direccion, String telefono,
			String email, String sexo, Date fechaNacimiento) {
		super();
		this.dni = dni;
		this.password = password;
		this.tipo = tipo;
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.setDireccion(direccion);
		this.telefono = telefono;
		this.email = email;
		this.sexo = sexo;
		this.fechaNacimiento = fechaNacimiento;
	}
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
	public String getApellidos() {
		return apellidos;
	}
	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}
	public String getTelefono() {
		return telefono;
	}
	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSexo() {
		return sexo;
	}
	public void setSexo(String sexo) {
		this.sexo = sexo;
	}
	public Date getFechaNacimiento() {
		return fechaNacimiento;
	}
	public void setFechaNacimiento(Date fechaNacimiento) {
		this.fechaNacimiento = fechaNacimiento;
	}
	public String getDni() {
		return dni;
	}
	public void setDni(String dni) {
		this.dni = dni;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getTipo() {
		return tipo;
	}
	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	public String getDireccion() {
		return direccion;
	}
	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}
}
