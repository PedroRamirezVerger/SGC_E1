package com.example.backend.models.services;

import java.util.List;

import com.example.backend.models.entity.Cita;

public interface ICitaService {

	public List<Cita> findAll();
	public List<Cita> findCitasByDniPaciente(String dniPaciente);
	public List<Cita> findCitasByDniMedico(String dniMedico);
}
