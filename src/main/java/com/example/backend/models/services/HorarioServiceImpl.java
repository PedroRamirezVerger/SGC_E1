package com.example.backend.models.services;

import java.util.List;

import com.example.backend.models.dao.IHorarioDAO;
import com.example.backend.models.entity.Horario;

public class HorarioServiceImpl implements IHorarioService{
	private IHorarioDAO horarioDao;
	
	@Override
	public List<Horario> findAll() {
		return horarioDao.findAll();
	}

	@Override
	public Horario findHorarioByDnimedicoAndDiaAndMesAndAno(String dniMedico, int dia, int mes, int ano) {
		return horarioDao.findByDniMedicoAndDiaAndMesAndAno(dniMedico, dia, mes, ano);
	}

}
