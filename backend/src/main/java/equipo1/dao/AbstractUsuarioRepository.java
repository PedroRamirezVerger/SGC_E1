package equipo1.dao;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;

import equipo1.model.AbstractUsuario;


public interface AbstractUsuarioRepository extends MongoRepository < AbstractUsuario, String >{
	AbstractUsuario findByUserName(String nombre);
	
	@Transactional
	@Modifying
	@Query(value= "update abstractusuario set pwd=:pwd where nombre=:nombre")
	AbstractUsuario updatePwd(@Param("nombre") String nombre, @Param("pwd") String pwd);
	
	@Transactional
	@Modifying
	@Query("delete from abstractusuario")
	void deleteAll();
	
	@Transactional
	@Modifying
	@Query(value= "update abstractusuario set nombre=?2 where nombre=?1")
	void changeUserName(String oldname, String newname);
}
