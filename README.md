# node-express-base-project
Basic (and deployable) structure for a NodeJS + Express application

## Connect to your EC2 instance

`ssh -i KEY.pem ec2-user@ec2-54-86-63-194.compute-1.amazonaws.com`

## Note

In case you cannot connect to your AWS EC2 machine due permission problems, run the following command on the pem key:

`sudo chmod 400 KEY.pem`

## Resources

- [Launching EC2 instance](https://docs.aws.amazon.com/es_es/AWSEC2/latest/UserGuide/launching-instance.html)
- [Accesing AWS EC2 instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstances.html)
- [AWS & Docker basics](https://docs.aws.amazon.com/es_es/AmazonECS/latest/developerguide/docker-basics.html)
- [NodeJS + Docker Webapp](https://nodejs.org/de/docs/guides/nodejs-docker-webapp/)