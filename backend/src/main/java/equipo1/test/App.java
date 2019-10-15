package equipo1.test;


import java.util.List;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;

import equipo1.configuration.ApplicationConfig;
import equipo1.model.AbstractUsuario;
import equipo1.services.AbstractUsuarioService;



public class App {

	public static void main(String args[]) {
		AbstractApplicationContext context=new AnnotationConfigApplicationContext(ApplicationConfig.class);
		AbstractUsuarioService usuarioService = (AbstractUsuarioService) context.getBean("AbstractUsuarioService");
		List < AbstractUsuario > usuarios = AbstractUsuarioService.findAll();
        for (AbstractUsuario usuario: usuarios) {
            System.out.println(usuario);
        }
	}
}
