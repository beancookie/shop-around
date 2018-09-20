FROM java:8
VOLUME /tmp
ADD eureka-0.0.1-SNAPSHOT.jar app.jar
RUN bash -c 'touch /app.jar'
EXPOSE 8888
ENTRYPOINT ["java","-Xmx128m","-Xms128m","-jar","/app.jar"]
