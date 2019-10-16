package equipo1.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import equipo1.model.CentroSalud;


public interface CentroSaludRepository extends MongoRepository < CentroSalud, String > {
	CentroSalud findByName(String nombre);
}
