package com.example.backend.models.services;

import java.util.List;

import com.example.backend.models.entity.Medico;
import com.example.backend.models.entity.Usuario;

public interface IUsuarioService {

    public List<Usuario> findAll();
    
    public Usuario findUserById(String id);

    public Usuario findUserByDni(String dni);

    public Medico findMedicoByDni(String dni); 
    
    public void saveUser(Usuario usuario);
    public void saveMedico(Medico medico);
}
