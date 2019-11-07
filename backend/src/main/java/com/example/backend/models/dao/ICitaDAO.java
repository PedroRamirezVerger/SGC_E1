package com.example.backend.models.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.example.backend.models.entity.Cita;

@Repository
public interface ICitaDAO extends MongoRepository<Cita, String>{
	List<Cita> findByDniPaciente(String dniPaciente);
	List<Cita> findByDniMedico(String dniMedico);
	
}
