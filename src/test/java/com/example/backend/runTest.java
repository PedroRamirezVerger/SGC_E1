package com.example.backend;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
plugin = {"html:target/cucumber-html-report", "json:target/cucumber-json-report.json"},
features = "src/test/resource/ModificarDatosPersonales.feature"
)
public class runTest {
}
