$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resource/Cita.feature");
formatter.feature({
  "name": "Pedir Cita",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Peticion cita correcta con datos correctos",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "name": "Usuario en pagina de pedir cita",
  "keyword": "Given "
});
formatter.match({
  "location": "CitaTest.usuario_en_pagina_de_pedir_cita()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Medico correcto",
  "keyword": "When "
});
formatter.match({
  "location": "CitaTest.medico_correcto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Fecha correcta",
  "keyword": "And "
});
formatter.match({
  "location": "CitaTest.fecha_correcta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Mensaje de cita creada correctamente",
  "keyword": "Then "
});
formatter.match({
  "location": "CitaTest.mensaje_de_cita_creada_correctamente()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Peticion cita incorrecta con fecha incorrecta",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "name": "Usuario en pagina de pedir cita",
  "keyword": "Given "
});
formatter.match({
  "location": "CitaTest.usuario_en_pagina_de_pedir_cita()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Medico correcto",
  "keyword": "When "
});
formatter.match({
  "location": "CitaTest.medico_correcto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Fecha incorrecta",
  "keyword": "And "
});
formatter.match({
  "location": "CitaTest.fecha_incorrecta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Mensaje de cita creada incorrectamente",
  "keyword": "Then "
});
formatter.match({
  "location": "CitaTest.mensaje_de_cita_creada_incorrectamente()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resource/Login.feature");
formatter.feature({
  "name": "Logeo al sistema",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login exitoso con credenciales validas",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "name": "Usuario en pagina de login",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTest.Usuario_en_pagina_de_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Credenciales correctas",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.Credenciales_correctas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Mensaje de bienvenida al login",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.Mensaje_de_bienvenida_al_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login fallido por nombre invalido",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "name": "Usuario en pagina de login",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTest.Usuario_en_pagina_de_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Nombre de usuario incorrecto",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.Nombre_de_usuario_incorrecto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Mensaje de error al login",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.Mensaje_de_error_al_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login fallido por password invalido",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Scenario3"
    }
  ]
});
formatter.step({
  "name": "Usuario en pagina de login",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTest.Usuario_en_pagina_de_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Password incorrecta",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.Contrase_a_incorrecta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Mensaje de error al login",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.Mensaje_de_error_al_login()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resource/LoginRoles.feature");
formatter.feature({
  "name": "Hacer login identificando el rol",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Scenario"
    }
  ]
});
formatter.scenario({
  "name": "Logearse como Paciente",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Scenario"
    },
    {
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "name": "Introduzco un usuario",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginRolesTest.introduzco_un_usuario()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "dni correcto",
  "keyword": "When "
});
formatter.match({
  "location": "RegistroTest.dni_correcto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "contraseña correcta",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.contraseña_correcta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tipo es \u003cPACIENTE\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "LoginRolesTest.tipo_es_PACIENTE()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario logeado como paciente",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginRolesTest.usuario_logeado_como_paciente()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Logearse como Medico",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Scenario"
    },
    {
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "name": "Introduzco un usuario",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginRolesTest.introduzco_un_usuario()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "dni correcto",
  "keyword": "When "
});
formatter.match({
  "location": "RegistroTest.dni_correcto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "contraseña correcta",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.contraseña_correcta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tipo es \u003cMEDICO\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "LoginRolesTest.tipo_es_MEDICO()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario logeado como medico",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginRolesTest.usuario_logeado_como_medico()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Logearse como Gestor",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Scenario"
    },
    {
      "name": "@Scenario3"
    }
  ]
});
formatter.step({
  "name": "Introduzco un usuario",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginRolesTest.introduzco_un_usuario()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "dni correcto",
  "keyword": "When "
});
formatter.match({
  "location": "RegistroTest.dni_correcto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "contraseña correcta",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.contraseña_correcta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tipo es \u003cGESTOR\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "LoginRolesTest.tipo_es_GESTOR()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario logeado como gestor",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginRolesTest.usuario_logeado_como_gestor()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resource/ModificarDatosPersonales.feature");
formatter.feature({
  "name": "Modificar datos de un usuario siendo gestor",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Scenario"
    }
  ]
});
formatter.scenario({
  "name": "Modificar datos personales correcto",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Scenario"
    },
    {
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "name": "Gestor en la pagina de modificar datos personales y usuario Luís Fernandez",
  "keyword": "Given "
});
formatter.match({
  "location": "ModificarDatosPersonalesTest.gestor_en_la_pagina_de_modificar_datos_personales_y_usuario_Luís_Fernandez()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "nombre introducido es \u003cRoberto\u003e",
  "keyword": "When "
});
formatter.match({
  "location": "ModificarDatosPersonalesTest.nombre_introducido_es_Roberto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Apellidos introducidos \u003cJiménez López\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarDatosPersonalesTest.apellidos_introducidos_Jiménez_López()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sexo introducido es \u003cHombre\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarDatosPersonalesTest.sexo_introducido_es_Hombre()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tipo de usuario es \u003cGESTOR\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarDatosPersonalesTest.tipo_de_usuario_es_GESTOR()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario modificado",
  "keyword": "Then "
});
formatter.match({
  "location": "ModificarDatosPersonalesTest.usuario_modificado()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Modificar nombre incorrecto",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Scenario"
    },
    {
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "name": "Gestor en la pagina de modificar datos personales y usuario Luís Fernandez",
  "keyword": "Given "
});
formatter.match({
  "location": "ModificarDatosPersonalesTest.gestor_en_la_pagina_de_modificar_datos_personales_y_usuario_Luís_Fernandez()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "nombre introducido es \u003c\"\"\u003e",
  "keyword": "When "
});
formatter.match({
  "location": "ModificarDatosPersonalesTest.nombre_introducido_es(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Apellidos introducidos \u003cJiménez López\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarDatosPersonalesTest.apellidos_introducidos_Jiménez_López()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sexo introducido es \u003cHombre\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarDatosPersonalesTest.sexo_introducido_es_Hombre()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tipo de usuario es \u003cGESTOR\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarDatosPersonalesTest.tipo_de_usuario_es_GESTOR()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario no modificado",
  "keyword": "Then "
});
formatter.match({
  "location": "ModificarDatosPersonalesTest.usuario_no_modificado()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Modificar Apellidos incorrecto",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Scenario"
    },
    {
      "name": "@Scenario3"
    }
  ]
});
formatter.step({
  "name": "Gestor en la pagina de modificar datos personales y usuario Luís Fernandez",
  "keyword": "Given "
});
formatter.match({
  "location": "ModificarDatosPersonalesTest.gestor_en_la_pagina_de_modificar_datos_personales_y_usuario_Luís_Fernandez()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "nombre introducido es \u003cRoberto\u003e",
  "keyword": "When "
});
formatter.match({
  "location": "ModificarDatosPersonalesTest.nombre_introducido_es_Roberto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Apellidos introducidos \u003c\"\"\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarDatosPersonalesTest.apellidos_introducidos(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sexo introducido es \u003cHombre\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarDatosPersonalesTest.sexo_introducido_es_Hombre()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tipo de usuario es \u003cGESTOR\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarDatosPersonalesTest.tipo_de_usuario_es_GESTOR()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario no modificado",
  "keyword": "Then "
});
formatter.match({
  "location": "ModificarDatosPersonalesTest.usuario_no_modificado()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resource/Registro.feature");
formatter.feature({
  "name": "Registrar ususario",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Scenario"
    }
  ]
});
formatter.scenario({
  "name": "Registro en el sistema",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Scenario"
    },
    {
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "name": "Usuario en pagina de registro",
  "keyword": "Given "
});
formatter.match({
  "location": "RegistroTest.usuario_en_pagina_de_registro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "dni correcto",
  "keyword": "When "
});
formatter.match({
  "location": "RegistroTest.dni_correcto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "contraseña correcta",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.contraseña_correcta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "nombre correcto",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.nombre_correcto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "apellidos correctos",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.apellidos_correctos()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fecha de nacimiento correcta",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.fecha_de_nacimiento_correcta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sexo correcto",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.sexo_correcto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "telefono correcto",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.telefono_correcto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "email correcto",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.email_correcto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario registrado",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistroTest.usuario_registrado()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Registro contraseña erronea",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Scenario"
    },
    {
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "name": "Usuario en pagina de registro",
  "keyword": "Given "
});
formatter.match({
  "location": "RegistroTest.usuario_en_pagina_de_registro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "dni correcto",
  "keyword": "When "
});
formatter.match({
  "location": "RegistroTest.dni_correcto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "contraseña incorrecta",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.contraseña_incorrecta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "nombre correcto",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.nombre_correcto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "apellidos correctos",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.apellidos_correctos()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fecha de nacimiento correcta",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.fecha_de_nacimiento_correcta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sexo correcto",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.sexo_correcto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "telefono correcto",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.telefono_correcto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "email correcto",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.email_correcto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario no registrado",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistroTest.usuario_no_registrado()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Registro dni incorrecto",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Scenario"
    },
    {
      "name": "@Scenario3"
    }
  ]
});
formatter.step({
  "name": "Usuario en pagina de registro",
  "keyword": "Given "
});
formatter.match({
  "location": "RegistroTest.usuario_en_pagina_de_registro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "dni incorrecto",
  "keyword": "When "
});
formatter.match({
  "location": "RegistroTest.dni_incorrecto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "contraseña correcta",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.contraseña_correcta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "nombre correcto",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.nombre_correcto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "apellidos correctos",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.apellidos_correctos()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fecha de nacimiento correcta",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.fecha_de_nacimiento_correcta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sexo correcto",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.sexo_correcto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "telefono correcto",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.telefono_correcto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "email correcto",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.email_correcto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario no registrado",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistroTest.usuario_no_registrado()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Registro email incorrecto",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Scenario"
    },
    {
      "name": "@Scenario4"
    }
  ]
});
formatter.step({
  "name": "Usuario en pagina de registro",
  "keyword": "Given "
});
formatter.match({
  "location": "RegistroTest.usuario_en_pagina_de_registro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "dni correcto",
  "keyword": "When "
});
formatter.match({
  "location": "RegistroTest.dni_correcto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "contraseña correcta",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.contraseña_correcta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "nombre correcto",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.nombre_correcto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "apellidos correctos",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.apellidos_correctos()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fecha de nacimiento correcta",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.fecha_de_nacimiento_correcta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sexo correcto",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.sexo_correcto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "telefono correcto",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.telefono_correcto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "email incorrecto",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.email_incorrecto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario no registrado",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistroTest.usuario_no_registrado()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Registro telefono incorrecto",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Scenario"
    },
    {
      "name": "@Scenario5"
    }
  ]
});
formatter.step({
  "name": "Usuario en pagina de registro",
  "keyword": "Given "
});
formatter.match({
  "location": "RegistroTest.usuario_en_pagina_de_registro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "dni correcto",
  "keyword": "When "
});
formatter.match({
  "location": "RegistroTest.dni_correcto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "contraseña correcta",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.contraseña_correcta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "nombre correcto",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.nombre_correcto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "apellidos correctos",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.apellidos_correctos()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fecha de nacimiento correcta",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.fecha_de_nacimiento_correcta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sexo correcto",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.sexo_correcto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "telefono incorrecto",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.telefono_incorrecto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "email correcto",
  "keyword": "And "
});
formatter.match({
  "location": "RegistroTest.email_correcto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario no registrado",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistroTest.usuario_no_registrado()"
});
formatter.result({
  "status": "passed"
});
});