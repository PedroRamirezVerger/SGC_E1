package com.example.backend.models.respuesta;

import com.example.backend.models.entity.Rol;
import com.example.backend.models.entity.Usuario;

public class RespuestaLogin {
	
	private boolean loginPasado;
	private Usuario usuario;
	private Rol rol;
	
	
	public boolean isLoginPasado() {
		return loginPasado;
	}
	public void setLoginPasado(boolean loginPasado) {
		this.loginPasado = loginPasado;
	}
	public Usuario getUsuario() {
		return usuario;
	}
	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
	
	public Rol getRol() {
		return rol;
	}
	
	public void setRol(Rol rol) {
		this.rol=rol;
	}

}
