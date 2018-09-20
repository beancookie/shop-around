FROM java:8
VOLUME /tmp
ADD zuul-0.0.1-SNAPSHOT.jar app.jar
RUN bash -c 'touch /app.jar'
EXPOSE 7004
ENTRYPOINT ["java","-Xmx128m","-Xms128m","-jar","/app.jar"]
