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
	//
	@Autowired
	public ArrayList<Cita> findByPacienteAndFecha(String dniPaciente, Date fecha) {
		return citaDao.findByDniPacienteAndFecha(dniPaciente, fecha);
	}

	@Autowired
	public ArrayList<Cita> findByDniMedico(String dniMedico) {
		return citaDao.findByDniMedico(dniMedico);
	}

	@Autowired
	public ArrayList<Cita> findByDniPaciente(String dniPaciente) {
		return citaDao.findByDniPaciente(dniPaciente);
	}

	@Override
	public void saveCita(Cita cita) {
		this.citaDao.save(cita);
		
	}

	

}
