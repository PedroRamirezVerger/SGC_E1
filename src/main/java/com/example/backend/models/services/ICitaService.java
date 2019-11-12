package com.example.backend.models.services;

import java.util.List;

import javax.validation.Valid;

import com.example.backend.models.entity.Cita;

public interface ICitaService {
	
	public List<Cita> findAll();
	public List<Cita> findCitasByDniPaciente(String dniPaciente);
	public List<Cita> findCitasByDniMedico(String dniMedico);
	public void saveCita(Cita cita);
	public void deleteCita(@Valid String id);
}
