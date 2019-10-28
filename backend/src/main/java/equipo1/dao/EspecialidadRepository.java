package equipo1.dao;

import org.springframework.data.mongodb.repository.MongoRepository;


import equipo1.model.Especialidad;

public interface EspecialidadRepository extends MongoRepository < Especialidad, String >{
	Especialidad findByName(String nombre);
}
