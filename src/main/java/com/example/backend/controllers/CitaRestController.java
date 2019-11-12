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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.models.entity.Cita;
import com.example.backend.models.respuesta.RespuestaCitasUsuario;
import com.example.backend.models.services.ICitaService;
import com.example.backend.models.services.IUsuarioService;

import lombok.Delegate;


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
     * @param dniPaciente
     * @return
     */
	@GetMapping("/citas/{id}")
	public RespuestaCitasUsuario getCitasPacienteByid(@PathVariable ("id") String id){
		RespuestaCitasUsuario respuestaCitasUsuario = new RespuestaCitasUsuario();
		respuestaCitasUsuario.setUsuario(usuarioService.findUserById(id));
		respuestaCitasUsuario.setListaCitasPaciente(citaService.findCitasByDniPaciente(respuestaCitasUsuario.getUsuario().getDni()));
		return respuestaCitasUsuario;
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
}
