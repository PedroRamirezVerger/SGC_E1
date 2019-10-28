package com.example.backend.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.client.InterceptingClientHttpRequestFactory;
import org.springframework.stereotype.Service;

import com.example.backend.models.dao.IUsuarioDAO;
import com.example.backend.models.entity.Usuario;

@Service
public class UsuarioServiceImpl implements IUsuarioService{

	@Autowired
	private IUsuarioDAO usuarioDao;
	
	@Override
	public List<Usuario> findAll() {
		return usuarioDao.findAll();
	}

	@Autowired
	public Usuario findUserByDni(String dni) {
		return usuarioDao.findByDni(dni);
	}
	
	

	
}
