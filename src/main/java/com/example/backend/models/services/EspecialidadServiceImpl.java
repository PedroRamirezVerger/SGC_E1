package com.example.backend.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.models.dao.IEspecialidadDAO;
import com.example.backend.models.entity.Especialidad;
import com.example.backend.models.entity.Medico;
import com.example.backend.models.entity.Usuario;
import com.example.backend.controllers.UsuarioRestController;

@Service
public class EspecialidadServiceImpl implements IEspecialidadService {

    @Autowired
    private IEspecialidadDAO especialidadDao;

    @Override
    public List<Especialidad> findAll() {
    	return especialidadDao.findAll();
    }

	@Override
	public List<String> findMedicosByEspecialidad(String nombre) {
		// TODO Auto-generated method stub
		return null;
	}

    

}



