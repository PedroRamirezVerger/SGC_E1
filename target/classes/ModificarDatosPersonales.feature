@Scenario
Feature: Modificar datos de un usuario siendo gestor

  @Scenario1
  Scenario: Modificar datos personales correcto
    Given Gestor en la pagina de modificar datos personales y usuario Luís Fernandez 
    When nombre introducido es <Roberto>
    And Apellidos introducidos <Jiménez López>
    And Sexo introducido es <Hombre>
    And Tipo de usuario es <GESTOR>
    Then usuario modificado
    
    @Scenario2
  Scenario: Modificar nombre incorrecto
    Given Gestor en la pagina de modificar datos personales y usuario Luís Fernandez 
    When nombre introducido es <"">
    And Apellidos introducidos <Jiménez López>
    And Sexo introducido es <Hombre>
    And Tipo de usuario es <GESTOR>
    Then usuario no modificado
    
	 @Scenario3
  Scenario: Modificar Apellidos incorrecto
    Given Gestor en la pagina de modificar datos personales y usuario Luís Fernandez 
    When nombre introducido es <Roberto>
    And Apellidos introducidos <"">
    And Sexo introducido es <Hombre>
    And Tipo de usuario es <GESTOR>
    Then usuario no modificado
    
 