package com.gnd.firstproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication

@RestController
@RequestMapping("/webapp")
public class HelloworldApplication {

	public static void main(String[] args) {
		SpringApplication.run(HelloworldApplication.class, args);
	}
	@RequestMapping("")
	public String greetings() {
		return "Greetings";
	}
	@RequestMapping("/world")
	public String hello() {
		return "hello World";
	}
	@RequestMapping("/home")
	public String builtWhithJava() {
		return "Bulit with Java";
	}
}
