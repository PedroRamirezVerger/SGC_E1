package com.example.backend.models.services;

import java.util.List;

import com.example.backend.models.entity.Horario;

public interface IHorarioService {
	
	public List<Horario> findAll();
	public Horario findHorarioByDnimedicoAndDiaAndMesAndAno(String dniMedico, int dia, int mes, int ano);
}
