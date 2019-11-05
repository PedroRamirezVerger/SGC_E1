package com.example.backend.models.dao;

import java.util.ArrayList;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.models.entity.Usuario;

@Repository
public interface IUsuarioDAO extends MongoRepository<Usuario, String> {
	Usuario findByDni(String dni);
	ArrayList<Usuario> findByTipo(String tipo);
}
