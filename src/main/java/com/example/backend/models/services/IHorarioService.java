package com.example.backend.models.services;

import java.util.List;

import javax.validation.Valid;

import com.example.backend.models.entity.Horario;

public interface IHorarioService {
	
	public List<Horario> findAll();
	public Horario findHorarioByDnimedicoAndDiaAndMesAndAno(String dniMedico, int dia, int mes, int ano);
	public List<Horario> findHorariosByDniMedico(String dniMedico);
	public void saveHorario(Horario horario);
	public void deleteHorario(@Valid String id);
}
