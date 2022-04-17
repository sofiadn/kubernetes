# Dockerizing a Node.js web app 

* note: you can replace summerplant with you own docker username
``` 
$ cd exampleapp
$ docker build -t summerplant/exampleapp:v1.0.0 . 
$ docker run -p 8080:8080 summerplant/exampleapp:v1.0.0
$ docker push summerplant/exampleapp:v1.0.0

```
This is then public -> https://hub.docker.com/r/summerplant/exampleapp


Next you can start a cluster and deploy it to kubernetes locally 

