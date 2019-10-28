package equipo1.model;

import java.util.Stack;

import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

@Entity(name="centrosalud")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name="nombre")

public class CentroSalud {
	@Id
	protected String nombre;
	protected String localidad;
	protected Stack<Medico> medicos;
	
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
	public Stack<Medico> getMedicos() {
		return medicos;
	}
	public void setMedicos(Stack<Medico> medicos) {
		this.medicos = medicos;
	}
	public void AddMedico(Medico medico) {
		medicos.add(medico);
	}
	public void DeleteMedico(Medico medico) {
		medicos.remove(medico);
	}
}
