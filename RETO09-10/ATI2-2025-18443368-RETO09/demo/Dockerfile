FROM openjdk:17-jdk-alpine
ADD target/reto09-0.0.1-SNAPSHOT.jar
app.jar
ENTRYPOINT
["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]