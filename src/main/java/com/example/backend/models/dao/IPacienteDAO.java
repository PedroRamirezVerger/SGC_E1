package com.example.backend.models.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.models.entity.Paciente;

@Repository
public interface IPacienteDAO extends MongoRepository<Paciente, String>{
	//Paciente findByDni(String dni);
}
