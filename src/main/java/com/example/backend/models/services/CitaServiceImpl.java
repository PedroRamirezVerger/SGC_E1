package com.example.backend.models.services;

import java.util.ArrayList;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.models.dao.ICitaDAO;
import com.example.backend.models.entity.Cita;
import com.example.backend.models.entity.Medico;
import com.example.backend.models.entity.Paciente;

@Service
public class CitaServiceImpl implements ICitaService {
	@Autowired
	private ICitaDAO citaDao;
	
	@Autowired
	public ArrayList<Cita> findByPacienteAndFecha(Paciente paciente, Date fecha) {
		return citaDao.findByPacienteAndFecha(paciente, fecha);
	}

	@Autowired
	public ArrayList<Cita> findByMedico(Medico medico) {
		return citaDao.findByMedico(medico);
	}

	@Autowired
	public ArrayList<Cita> findByPaciente(Paciente paciente) {
		return citaDao.findByPaciente(paciente);
	}

	@Override
	public void saveCita(Cita cita) {
		this.citaDao.save(cita);
		
	}

}
