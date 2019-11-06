package com.example.backend.models.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.backend.models.entity.Cita;

public interface ICitaDAO extends MongoRepository<Cita, String>{

} 
