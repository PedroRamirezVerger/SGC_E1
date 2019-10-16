package equipo1.dao;

import org.springframework.data.mongodb.repository.MongoRepository;


import equipo1.model.Medico;



public interface MedicoRepository extends MongoRepository < Medico, String > {
	Medico findByUserName(String nombre);
}
