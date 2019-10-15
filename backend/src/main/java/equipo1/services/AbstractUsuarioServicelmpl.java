package equipo1.services;
import java.util.List;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
 
import equipo1.model.AbstractUsuario;
import equipo1.repositories.AbstractUsuarioRepository;

@Service("AbstractUsuarioService")
public class AbstractUsuarioServicelmpl implements AbstractUsuarioService {
	@Autowired
	AbstractUsuarioRepository UsuarioRepo;
	
	@Override
	public void create(AbstractUsuario usuario) {
    	AbstractUsuario c = UsuarioRepo.insert(usuario);
        System.out.println("Created:- " + c);
    }
	@Override
    public void update(AbstractUsuario usuario) {
    	AbstractUsuario c = UsuarioRepo.save(usuario);
        System.out.println("Updated:- " + c);
 
    }
 
	@Override
    public void delete(AbstractUsuario usuario) {
    	UsuarioRepo.delete(usuario);
        System.out.println("Deleted:- " + usuario.getDni());
    }
 
	@Override
    public List < AbstractUsuario > findAll() {
        return UsuarioRepo.findAll();
    }
 
 
	@Override
    public void deleteAll() {
    	UsuarioRepo.deleteAll();
    }


}
