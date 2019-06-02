# Node Express Base Project

A basic (and deployable) structure for a NodeJS + Express application

## Connect to your EC2 instance

`ssh -i KEY.pem ec2-user@ec2-54-86-63-194.compute-1.amazonaws.com`

### Note

In case you cannot connect to your AWS EC2 machine due permission problems, run the following command on the pem key:

`sudo chmod 400 KEY.pem`

## Upload a source bundle to your EC2 instance

First create a source bundle. This is a ZIP file that contains the app:

`git archive -v -o app.zip --format=zip HEAD`

Now transfer the source bundle your EC2 instance:

`scp -i aws-base-proyect.pem app.zip ec2-user@ec2-54-86-63-194.compute-1.amazonaws.com:~`

## Build the docker image

`docker build -t node-web-app .`

## Run the docker image

`sudo docker run -p 8000:8000 -i -t node-web-app`

## Resources

- [Launching EC2 instance](https://docs.aws.amazon.com/es_es/AWSEC2/latest/UserGuide/launching-instance.html)
- [Accesing AWS EC2 instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstances.html)
- [Create an Application Source Bundle](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-sourcebundle.html#using-features.deployment.source.git)
- [AWS & Docker basics](https://docs.aws.amazon.com/es_es/AmazonECS/latest/developerguide/docker-basics.html)
- [NodeJS + Docker Webapp](https://nodejs.org/de/docs/guides/nodejs-docker-webapp/)