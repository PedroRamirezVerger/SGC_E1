$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resource/Login.feature");
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
});