package com.example.backend.models.dao;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.rmi.server.ObjID;

import com.example.backend.models.entity.Usuario;

@Repository
public interface IUsuarioDAO extends MongoRepository<Usuario, String> {
	Usuario findByDni(String dni);
	
}
