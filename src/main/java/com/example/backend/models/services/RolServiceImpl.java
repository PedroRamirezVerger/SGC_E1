package com.example.backend.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.models.dao.IRolDAO;
import com.example.backend.models.entity.Rol;

@Service
public class RolServiceImpl implements IRolService {
	@Autowired
	private IRolDAO rolDao;
	
	@Override
	public List<Rol> findAll() {
		return rolDao.findAll();
	}

	@Override
	public Rol findRolByNombre(String nombre) {
		return rolDao.findByNombre(nombre);
	}
	
}
