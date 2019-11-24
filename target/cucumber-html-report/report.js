$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resource/ModificarDatosPersonales.feature");
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
});