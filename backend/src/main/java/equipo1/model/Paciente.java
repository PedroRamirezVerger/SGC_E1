package equipo1.model;

import java.util.Stack;

import javax.persistence.Entity;

@Entity
public class Paciente extends AbstractUsuario{

	protected String nombre;
	protected String apellido;
	protected String email;
	protected String telefono;
	protected Medico medico;
	protected CentroSalud centrosalud;
	protected Stack<String> enfermedades;
	
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
	public Medico getMedico() {
		return medico;
	}
	public void setMedico(Medico medico) {
		this.medico = medico;
	}
	public CentroSalud getCentrosalud() {
		return centrosalud;
	}
	public void setCentrosalud(CentroSalud centrosalud) {
		this.centrosalud = centrosalud;
	}
	public Stack<String> getEnfermedades() {
		return enfermedades;
	}
	public void setEnfermedades(Stack<String> enfermedades) {
		this.enfermedades = enfermedades;
	}
	public void AddEnfermedad(String enfermedad) {
		enfermedades.add(enfermedad);
	}
	public void DeleteEnfermedad(String enfermedad) {
		enfermedades.remove(enfermedad);
	}
	
}
