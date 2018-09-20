FROM java:8
VOLUME /tmp
ADD reptile-0.0.1-SNAPSHOT.jar app.jar
RUN bash -c 'touch /app.jar'
EXPOSE 7002
ENTRYPOINT ["java","-Xmx256m","-Xms256m","-jar","/app.jar"]
