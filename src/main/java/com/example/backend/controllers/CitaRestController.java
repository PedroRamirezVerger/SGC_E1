package com.example.backend.controllers;

import java.util.List;

import javax.validation.Valid;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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


@CrossOrigin(value = "https://sgcequipo1.herokuapp.com") 
// @CrossOrigin(value = "http://localhost:4200") // PARA DESARROLLO
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
	@GetMapping("/citas/{dniPaciente}")
	public RespuestaCitasUsuario getCitasPacienteByDni(@PathVariable ("dniPaciente") String dniPaciente){
		RespuestaCitasUsuario respuestaCitasUsuario = new RespuestaCitasUsuario();
		respuestaCitasUsuario.setUsuario(usuarioService.findUserByDni(dniPaciente));
		respuestaCitasUsuario.setListaCitasPaciente(citaService.findCitasByDniPaciente(dniPaciente));
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
}