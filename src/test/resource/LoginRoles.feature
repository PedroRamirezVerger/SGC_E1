@Scenario
Feature: Hacer login identificando el rol

  @Scenario1
  Scenario: Logearse como Paciente
    Given Introduzco un usuario 
    When dni correcto
    And contraseña correcta
    And tipo es <PACIENTE>
    Then usuario logeado como paciente
    
    @Scenario2
    Scenario: Logearse como Medico
    Given Introduzco un usuario 
    When dni correcto
    And contraseña correcta
    And tipo es <MEDICO>
    Then usuario logeado como medico
    
	@Scenario3
	 Scenario: Logearse como Gestor
    Given Introduzco un usuario 
    When dni correcto
    And contraseña correcta
    And tipo es <GESTOR>
    Then usuario logeado como gestor