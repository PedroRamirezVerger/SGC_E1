package com.example.backend.models.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.models.entity.Medico;


@Repository
public interface IMedicoDAO extends MongoRepository<Medico, String> {
	//Medico findByDni(String dni);
}
