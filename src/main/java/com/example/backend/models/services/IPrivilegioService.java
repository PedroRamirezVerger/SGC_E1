package com.example.backend.models.services;

import java.util.List;

import com.example.backend.models.entity.Privilegio;

public interface IPrivilegioService {
	public List<Privilegio> findAll();
	public Privilegio findPrivilegioByNombre(String nombre);
}
