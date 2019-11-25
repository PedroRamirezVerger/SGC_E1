package com.example.backend.models.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.example.backend.models.entity.Especialidad;

@Repository
public interface IEspecialidadDAO extends MongoRepository<Especialidad, String> {
    List<Especialidad> findAll();
    Especialidad findByNombre(String nombre);

}