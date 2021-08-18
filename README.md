# 🚀 React-Portfolio 🚀

React portfolio using Chakra-UI, Material-UI developed in TypeScript.

Watch in action: [Click here](https://react-portfolio-538e5shw2-shabbi268.vercel.app/).

## Table of Contents

- [Installation](#installation)
- [Customization](#usage)
- [Themes](#themes)
- [Support](#support)
- [Contributing](#contributing)

## Installation

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


## Docker Setup
Follow the below instructions if you want to run the application in an docker container
- Run below command to build the Docker Image:
    `docker build -t <NAME_AS_YOU_WISH>` .
- Run below command to run a container instance of the image created above:
    `docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true <CHOOSE_IMAGE_NAME_ABOVE>`
- Now the docker image is created and container instance is up and running.
- Go to the `http://localhost:3001/` and you should see the app running.
