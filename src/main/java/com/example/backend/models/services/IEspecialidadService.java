package com.example.backend.models.services;

import java.util.List;

import javax.validation.Valid;

import com.example.backend.models.entity.Especialidad;

public interface IEspecialidadService {
	
	public List<Especialidad> findAll();
}
