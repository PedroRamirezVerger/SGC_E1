package com.example.backend.models.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.backend.models.entity.Cita;
import com.example.backend.models.entity.Medico;
import com.example.backend.models.entity.Paciente;

public interface ICitaService {


	public ArrayList<Cita> findByPacienteAndFecha(String dniPaciente, Date fecha);
	public ArrayList<Cita> findByDniMedico(String dniMedico);
	public ArrayList<Cita> findByDniPaciente(String dniPaciente);

	public void saveCita(Cita cita);

}
