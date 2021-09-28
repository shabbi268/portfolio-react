# React-Portfolio

React portfolio using Chakra-UI, Material-UI developed in TypeScript.

Watch in action: [Click here](https://shabarish-kesa-react-portfolio.vercel.app/).

# Intro

- 👋 Hi, I’m Shabarish Kesa, Currently working as a Software Engineer at Predictronics Corp.
- 👀 I’m interested in solving problems using technology
- 🌱 I’m currently learning Docker, Docker-Compose, Linux Server Management.
- 💞️ I’m looking to collaborate on software development projects
- 📫 Reach me at shabarish.shabbi@gmail.com

I am a Full-stack developer with expertise in frontend. I love working with various frameworks and libraries and get my work done

<a href="https://app.daily.dev/K2513388"><img src="https://api.daily.dev/devcards/43b0e5887920437b801305f8093fdcc0.png?r=h0q" width="400" alt="Kesa Shabarish's Dev Card"/></a>

## Table of Contents

- [Setup](#setup)
- [Customization](#Customization)
- [Themes](#themes)

## Setup

Install in 5 easy steps

1. Fork this repo
2. Edit `data.json` and `config.ts` to update the CSS Colors according to your needs
4. Run `npm install` from your favourite CLI
5. Run `npm run start` and watch the magic happens


## Customization

This Portfolio Application is divided into various granular modules with interface objects thats defines the prop or state of the object.

You can change the modules according to your needs by simply updating the `data.json` file's Json Object.

## Themes

I used 5 Basic themes for this application which can also be customized as per your needs.


## Docker Setup:
### Docker Image and Container Way:
Follow the below instructions if you want to run the application in an docker container
- Run below command to build the Docker Image:
    `docker build -t <NAME_AS_YOU_WISH>` .
- Run below command to run a container instance of the image created above:
    `docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true <CHOOSE_IMAGE_NAME_ABOVE>`
- Now the docker image is created and container instance is up and running.
- Go to the `http://localhost:3001/` and you should see the app running.
- Make sure you go to above url at `3001` because we proxied the port 3000 to 3001 of docker virtual port.

### Docker-Compose way:
Follow the below steps to use docker-compose to run the application in one step:
- Run the below command to build and run the application:
    `docker-compose up -d --build`
- The above command takes care of building image, creating and running the container.

### Pulling the Image from Docker Hub and Running the application
- Run the below command to pull the latest Docker Image to your local computer
    `docker pull kesash/cloud_poster:version1`
- Run the below command to run the instance of the pulled container
    `docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true kesash/cloud_poster:version1`
