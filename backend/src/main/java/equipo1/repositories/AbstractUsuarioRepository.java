package equipo1.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
import equipo1.model.AbstractUsuario;

@Repository
public interface AbstractUsuarioRepository extends MongoRepository < AbstractUsuario, String >{
	
}
