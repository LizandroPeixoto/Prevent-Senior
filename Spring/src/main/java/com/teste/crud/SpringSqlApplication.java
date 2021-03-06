package com.teste.crud;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class SpringSqlApplication {

	@Autowired
	public static void main(String[] args) {
		SpringApplication.run(SpringSqlApplication.class, args);
	}
}
