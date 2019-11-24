package com.example.backend.controllers;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.validation.Valid;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.models.entity.Cita;
import com.example.backend.models.entity.Usuario;
import com.example.backend.models.services.ICitaService;
import com.example.backend.models.services.IHorarioService;
import com.example.backend.models.services.IUsuarioService;
import com.example.backend.models.utiles.Encriptador;



//@CrossOrigin(value = "https://sgcequipo1.herokuapp.com") 
@CrossOrigin(value = "http://localhost:4200") // PARA DESARROLLO
@RestController
@RequestMapping("api")
public class CitaRestController {
	
	@Autowired
	private ICitaService citaService;
	
	@Autowired 
	private IUsuarioService usuarioService;
	
	@Autowired
	private IHorarioService horarioService;
	
	private SecretKey key;
	private Cipher cipher;
	private String algoritmo = "AES";
	private int keysize = 16;
	private String clave = "seguridad";
	
	private Encriptador encriptador=new Encriptador(key,cipher,algoritmo,keysize,clave);
	
	@GetMapping("/citas")
	public List<Cita> getAllCitas() {
		return citaService.findAll();
	}
	
	/**
     * obtener las citas del usuario en concreto
     * @param id
     * @return
     */
	@GetMapping("/citas/fecha/{id}")
	public Cita getCitaByid(@PathVariable ("id") String id){
		return citaService.findCitaById(id);
	}
	
	/**
     * obtener las citas del usuario en concreto
     * @param id
     * @return
	 * @throws UnsupportedEncodingException 
     */
	@GetMapping("/citas/paciente/{dni}")
	public List<Cita> getCitasPacienteByid(@PathVariable ("dni") String dni) throws UnsupportedEncodingException{
		List <Cita> listaCitas=new ArrayList<Cita>();
		dni=encriptador.encriptarDni(dni);
		listaCitas= citaService.findCitasByDniPaciente(dni);
		for(Cita cita : listaCitas) {
			encriptador.desencriptarCita(cita);
		}
		return listaCitas;
	}

	@GetMapping("/citas/medico/{dni}")
	public List<Cita> getCitasMedicoByid(@PathVariable ("dni") String dni){
		return citaService.findCitasByDniMedico(dni);
	}
	
	/**
     * add citas a un usuario
     * @param cita
     * @return
	 * @throws UnsupportedEncodingException 
     */
	@PostMapping("/citas")
	public Cita addCita(@Valid @RequestBody Cita cita) throws UnsupportedEncodingException {
		cita.set_id(ObjectId.get());
		encriptador.encriptarCita(cita);
		citaService.saveCita(cita);
		return cita;
	}
	/**
     * borra citas a un usuario
     * @param cita
     */
	@DeleteMapping("/citas/{id}")
	public void deleteCita(@PathVariable ("id") String id) {
		citaService.deleteCita(id);
	}
	
	   
    /** 
     * Modificar la fecha de la cita
     * @param teléfono
     * @param modificarDatosContacto
     * @throws UnsupportedEncodingException 
     */
    @PutMapping("/citas/{id}")
    public Cita modificarFechaCita(@PathVariable("id") ObjectId id, @Valid @RequestBody Cita cita) throws UnsupportedEncodingException {
    	cita.set_id(id);
    	cita=encriptador.encriptarCita(cita);
    	citaService.saveCita(cita);
    	return cita;
    	
    }
	
}
