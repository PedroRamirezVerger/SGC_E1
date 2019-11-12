@Scenario
Feature: Registrar ususario

  @Scenario1
  Scenario: Registro en el sistema
    Given Usuario en pagina de registro
    When dni correcto
    And contraseña correcta
    And nombre correcto
    And apellidos correctos
    And fecha de nacimiento correcta
    And sexo correcto
    And telefono correcto
    And email correcto
    Then usuario registrado
    
    @Scenario2
    Scenario: Registro contraseña erronea 
    Given Usuario en pagina de registro
    When dni correcto
    And contraseña incorrecta
    And nombre correcto
     And apellidos correctos
    And fecha de nacimiento correcta
    And sexo correcto
    And telefono correcto
    And email correcto
    Then usuario no registrado
    
	@Scenario3
	Scenario: Registro dni incorrecto
	Given Usuario en pagina de registro
	When dni incorrecto
	And contraseña correcta
    And nombre correcto
     And apellidos correctos
    And fecha de nacimiento correcta
    And sexo correcto
    And telefono correcto
    And email correcto
    Then usuario no registrado
    
    @Scenario4
    Scenario: Registro email incorrecto
    Given Usuario en pagina de registro
    When dni correcto
    And contraseña correcta
    And nombre correcto
    And apellidos correctos
    And fecha de nacimiento correcta
    And sexo correcto
    And telefono correcto
    And email incorrecto
    Then usuario no registrado
    
    @Scenario5
    Scenario: Registro telefono incorrecto
     Given Usuario en pagina de registro
    When dni correcto
    And contraseña correcta
    And nombre correcto
    And apellidos correctos
    And fecha de nacimiento correcta
    And sexo correcto
    And telefono incorrecto
    And email correcto
    Then usuario no registrado
