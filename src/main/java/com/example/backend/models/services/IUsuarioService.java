package com.example.backend.models.services;

import java.util.ArrayList;
import java.util.List;

import com.example.backend.models.entity.Usuario;

public interface IUsuarioService {

	public List<Usuario> findAll();
	public Usuario findUserByDni(String dni);
	public ArrayList<Usuario> findUserByTipo(String tipo);
	public void saveUser(Usuario usuario);
	
}
