package com.example.backend.models.services;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.models.dao.ICitaDAO;
import com.example.backend.models.entity.Cita;

@Service
public class CitaServiceImpl implements ICitaService{
	
	@Autowired
	private ICitaDAO citaDao;
	
	@Override
	public List<Cita> findAll() {
		return citaDao.findAll();
	}
	
	@Override
	public Cita findCitaById(String id) {
		return citaDao.findBy_id(id);
	}
	
	@Override
	@Autowired(required = false)
	public List<Cita> findCitasByDniPaciente(String dniPaciente) {
		return citaDao.findByDniPaciente(dniPaciente);
	}

	@Override
	public List<Cita> findCitasByDniMedico(String dniMedico) {
		return citaDao.findByDniMedico(dniMedico);
	}

	@Override
	public void saveCita(Cita cita) {
		this.citaDao.save(cita);
	}


	@Override
	public void deleteCita(@Valid String id) {
		this.citaDao.deleteById(id);
		
	}
}

