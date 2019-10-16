package equipo1.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import equipo1.model.Enfermero;



public interface EnfermeroRepository extends MongoRepository < Enfermero, String > {
	Enfermero findByUserName(String nombre);
}
