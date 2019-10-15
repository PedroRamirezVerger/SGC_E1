package equipo1.model;

import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

@Entity(name="especialidad")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name="nombre")

public class Especialidad {
	@Id
	protected String nombre;
	protected int duracionCita;
	
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public int getDuracionCita() {
		return duracionCita;
	}
	public void setDuracionCita(int duracionCita) {
		this.duracionCita = duracionCita;
	}
	
}
