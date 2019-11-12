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
});