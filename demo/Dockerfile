# Étape 1 : Utiliser une image de base contenant Java
FROM openjdk:21-jdk-slim

# Étape 2 : Configurer un répertoire de travail dans le conteneur
WORKDIR /app

# Étape 3 : Copier le fichier JAR généré par Maven dans l'image Docker
COPY target/demo-0.0.1-SNAPSHOT.jar app.jar

# Étape 4 : Exposer le port sur lequel l'application fonctionne
EXPOSE 8080

# Étape 5 : Définir la commande pour exécuter l'application
ENTRYPOINT ["java", "-jar", "app.jar"]
