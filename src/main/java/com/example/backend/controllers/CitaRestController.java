package com.example.backend.controllers;

import java.util.List;

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
import com.example.backend.models.respuesta.RespuestaCitasUsuario;
import com.example.backend.models.services.ICitaService;
import com.example.backend.models.services.IUsuarioService;



// @CrossOrigin(value = "https://sgcequipo1.herokuapp.com") 
@CrossOrigin(value = "http://localhost:4200") // PARA DESARROLLO
@RestController
@RequestMapping("api")
public class CitaRestController {
	
	@Autowired
	private ICitaService citaService;
	
	@Autowired 
	private IUsuarioService usuarioService;
	
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
     */
	@GetMapping("/citas/paciente/{dni}")
	public List<Cita> getCitasPacienteByid(@PathVariable ("dni") String dni){
		return citaService.findCitasByDniPaciente(dni);
	}
	
	/**
     * add citas a un usuario
     * @param cita
     * @return
     */
	@PostMapping("/citas")
	public Cita addCita(@Valid @RequestBody Cita cita) {
		cita.set_id(ObjectId.get());
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
     */
    @PutMapping("/citas/{id}")
    public Cita modificarFechaCita(@PathVariable("id") ObjectId id, @Valid @RequestBody Cita cita) {
    	cita.set_id(id);
    	citaService.saveCita(cita);
    	return cita;
    	
    }
	
}
