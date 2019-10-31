package com.example.backend.models.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.models.entity.Cita;
import com.example.backend.models.entity.Medico;
import com.example.backend.models.entity.Paciente;



@Repository
public interface ICitaDAO extends MongoRepository<Cita, String> {
	Cita findByMedicoAndPaciente(Medico medico, Paciente paciente);
	
	Cita findByMedico(Medico medico);
	
	Cita findByPaciente(Paciente paciente);
}
