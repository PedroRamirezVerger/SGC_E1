package com.example.backend.models.services;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Service;

import com.example.backend.models.dao.IHorarioDAO;
import com.example.backend.models.entity.Horario;

@Service
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

	@Override
	public List<Horario> findHorariosByDniMedico(String dniMedico) {
		return horarioDao.findByDniMedico(dniMedico);
	}

	@Override
	public void saveHorario(Horario horario) {
		horarioDao.save(horario);
		
	}

	@Override
	public void deleteHorario(@Valid String id) {
		horarioDao.deleteById(id);
	}

}
