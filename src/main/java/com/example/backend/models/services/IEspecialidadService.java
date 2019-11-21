package com.example.backend.models.services;

import java.util.List;

import javax.validation.Valid;

import com.example.backend.models.entity.Especialidad;
import com.example.backend.models.entity.Medico;

public interface IEspecialidadService {
	
	public List<Especialidad> findAll();
    public List<String> findMedicosByEspecialidad(String nombre);
}
