package com.laboratorio4.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

import lombok.Data;
import lombok.NoArgsConstructor;

@EnableDiscoveryClient
@SpringBootApplication
public class Ati2microservicioGreetingMicroserviceApplication {

	public static void main(String[] args) {
        try {
            SpringApplication.run(Ati2microservicioGreetingMicroserviceApplication.class, args);
        }catch(Exception e){
            e.printStackTrace();
        }
	}

}
