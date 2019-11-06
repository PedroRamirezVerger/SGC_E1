package com.example.backend.models.respuesta;

import java.util.List;

import com.example.backend.models.entity.Cita;
import com.example.backend.models.entity.Usuario;

public class RespuestaCitasUsuario {

	private Usuario usuario;
	private List<Cita> listaCitasPaciente;
	
	public Usuario getUsuario() {
		return usuario;
	}
	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
	public List<Cita> getListaCitasPaciente() {
		return listaCitasPaciente;
	}
	public void setListaCitasPaciente(List<Cita> listaCitasPaciente) {
		this.listaCitasPaciente = listaCitasPaciente;
	}
	
	
}
