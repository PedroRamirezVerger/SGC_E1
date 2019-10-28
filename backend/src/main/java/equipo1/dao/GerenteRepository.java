package equipo1.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import equipo1.model.Gerente;



public interface GerenteRepository extends MongoRepository < Gerente, String >{
	Gerente findByUserName(String nombre);
}
