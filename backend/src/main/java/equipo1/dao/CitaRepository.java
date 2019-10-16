package equipo1.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import equipo1.model.Cita;


public interface CitaRepository extends MongoRepository < Cita, String > {
	Cita findByid(int id);
}
