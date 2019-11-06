package com.example.backend.controllers;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.models.entity.Cita;
import com.example.backend.models.services.ICitaService;

//@CrossOrigin(value = "https://sgcequipo1.herokuapp.com") 
@CrossOrigin(value = "http://localhost:4200") // PARA DESARROLLO
@RestController
@RequestMapping("/api")
public class CitaRestController {
	
	
	@Autowired
	private ICitaService citaService;
	
	@GetMapping("/citas")
	public List<Cita> getAllCitas() {
		return citaService.findAll();
	}
	
	@GetMapping("/citas/{dniPaciente}")
	public List<Cita> getCitasPacienteByDni(@PathVariable ("dniPaciente") String dniPaciente){
		return citaService.findCitasByDniPaciente(dniPaciente);
	}
	
	

}
