package com.example.backend.models.respuesta;

import com.example.backend.models.entity.Usuario;

public class RespuestaLogin {
	
	private boolean loginPasado;
	private Usuario usuario;
	
	
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
	
	
	

}
