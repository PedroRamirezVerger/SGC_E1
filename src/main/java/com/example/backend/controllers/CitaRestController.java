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

import com.example.backend.models.entity.Usuario;
import com.example.backend.models.services.ICitaService;
import com.example.backend.models.services.IUsuarioService;

//@CrossOrigin(value = "https://sgcequipo1.herokuapp.com") 
@CrossOrigin(value = "http://localhost:4200") //PARA DESARROLLO
@RestController
@RequestMapping("/api")
public class CitaRestController {
/*	
	@Autowired
	private ICitaService citaService;

	
	*/
}
