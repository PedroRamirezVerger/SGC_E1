package com.example.backend.models.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.example.backend.models.entity.Especialidad;
import com.example.backend.models.entity.Medico;

@Repository
public interface IEspecialidadDAO extends MongoRepository<Especialidad, String> {
    List<Medico> findByEspecialidad(String nombre);
    List<Especialidad> findAll();


}