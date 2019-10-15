package equipo1.services;

import java.util.List;

import equipo1.model.AbstractUsuario;

public interface AbstractUsuarioService {
	public void create(AbstractUsuario usuario);
	 
    public void update(AbstractUsuario usuario);
 
    public void delete(AbstractUsuario usuario);
 
    public void deleteAll();
 
    public List < AbstractUsuario > findAll();
}
