package com.example.backend.models.services;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.models.dao.IEspecialidadDAO;
import com.example.backend.models.entity.Especialidad;

@Service
public class EspecialidadServiceImpl implements IEspecialidadService {

    @Autowired
    private IEspecialidadDAO especialidadDao;

    @Override
    public List<Especialidad> findAll() {
    	return especialidadDao.findAll();
    }

	@Override
	public Especialidad findByNombre(String nombre) {
		return especialidadDao.findByNombre(nombre);
	}
    

}



