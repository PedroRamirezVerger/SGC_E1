package com.example.backend.models.services;

import java.util.List;

import com.example.backend.models.entity.Usuario;

public interface IUsuarioService {

	public List<Usuario> findAll();
	public Usuario findUserByDni(String dni);
}