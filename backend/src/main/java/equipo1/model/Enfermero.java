package equipo1.model;
import javax.persistence.Entity;

@Entity
public class Enfermero extends AbstractUsuario {

	protected String nombre;
	protected String apellido;
	protected String email;
	protected String telefono;
	protected CentroSalud centrosalud;
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
	public CentroSalud getCentrosalud() {
		return centrosalud;
	}
	public void setCentrosalud(CentroSalud centrosalud) {
		this.centrosalud = centrosalud;
	}
	
	
}
