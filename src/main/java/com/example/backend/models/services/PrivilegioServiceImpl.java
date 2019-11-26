package com.example.backend.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.backend.models.dao.IPrivilegioDAO;
import com.example.backend.models.entity.Privilegio;

public class PrivilegioServiceImpl implements IPrivilegioService {

	@Autowired
	private IPrivilegioDAO privilegioDao;
	@Override
	public List<Privilegio> findAll() {
		return privilegioDao.findAll() ;
	}

	@Override
	public Privilegio findPrivilegioByNombre(String nombre) {
		return privilegioDao.findByNombre(nombre);
	}

}
