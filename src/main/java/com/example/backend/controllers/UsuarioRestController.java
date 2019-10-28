package com.example.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.models.dao.IUsuarioDAO;
import com.example.backend.models.entity.Usuario;
import com.example.backend.models.services.IUsuarioService;

@RestController
@RequestMapping("/api")
public class UsuarioRestController {
	
	@Autowired
	private IUsuarioService usuarioService;
	
	@Autowired
	private IUsuarioDAO usuarioDao;
	
	@GetMapping("/usuarios")
	public List<Usuario> getAllUsers() {
		return usuarioService.findAll();
	}
	
	@GetMapping("/usuarios/{dni}")
	public Usuario getUserByDni(@PathVariable("dni") String dni) {
		return usuarioService.findUserByDni(dni);
	}
	
}
