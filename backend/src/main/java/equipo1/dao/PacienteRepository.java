package equipo1.dao;

import org.springframework.data.mongodb.repository.MongoRepository;


import equipo1.model.Paciente;

public interface PacienteRepository extends MongoRepository < Paciente, String > {
	Paciente findByUserName(String nombre);
}
