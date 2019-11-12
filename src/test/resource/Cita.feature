
Feature: Pedir Cita

@Scenario1
Scenario: Peticion cita correcta con datos correctos
	Given Usuario en pagina de pedir cita
	When Medico correcto
	And Fecha correcta
	Then Mensaje de cita creada correctamente

@Scenario2
Scenario: Peticion cita incorrecta con fecha incorrecta
	Given Usuario en pagina de pedir cita
	When Medico correcto
	And Fecha incorrecta
	Then Mensaje de cita creada incorrectamente
	
