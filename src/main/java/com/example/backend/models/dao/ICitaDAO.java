package com.example.backend.models.dao;

import java.util.ArrayList;
import java.util.Date;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.models.entity.Cita;
import com.example.backend.models.entity.Medico;
import com.example.backend.models.entity.Paciente;



@Repository
public interface ICitaDAO extends MongoRepository<Cita, String> {
	
	ArrayList<Cita> findByDniPacienteAndFecha(String dniPaciente, Date fecha);
	
	ArrayList<Cita> findByDniMedico(String dniMedico);
	
	ArrayList<Cita> findByDniPaciente(String dniPaciente);
	
}
