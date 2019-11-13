package com.example.backend.models.respuesta;

import java.util.List;

import com.example.backend.models.entity.Usuario;

public class RespuestaUsuariosGestor {
    private List<Usuario> listaUsuarios;

    public List<Usuario> getListaUsuarios() {
        return listaUsuarios;
    }

    public void setListaUsuarios(List<Usuario> listaUsuarios) {
        this.listaUsuarios = listaUsuarios;
    }
    
}
