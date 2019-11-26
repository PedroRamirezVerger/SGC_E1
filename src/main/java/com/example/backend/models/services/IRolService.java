package com.example.backend.models.services;

import java.util.List;


import com.example.backend.models.entity.Rol;

public interface IRolService {
	public List<Rol> findAll();
	public Rol findRolByNombre(String nombre);

}
