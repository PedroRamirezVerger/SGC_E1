package com.example.backend.models.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.example.backend.models.entity.Horario;
@Repository
public interface IHorarioDAO extends MongoRepository<Horario, String>{
	Horario findByDniMedicoAndDiaAndMesAndAno(String dniMedico, int dia, int mes, int ano);
	List<Horario> findByDniMedico(String dniMedico);
}
