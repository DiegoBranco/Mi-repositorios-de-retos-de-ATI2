package com.laboratorio4.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class Ati2microservicioGreetingMicroserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(Ati2microservicioGreetingMicroserviceApplication.class, args);
	}

}
