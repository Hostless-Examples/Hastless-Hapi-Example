# Hapi

Build powerful, scalable applications, with minimal overhead and full out-of-the-box functionality - your code, your way. Check out their official documentation [here](https://hapi.dev/tutorials/?lang=en_US)

## Deploy a Hapi App

1. Fork/Clone this [Hostless-Hapi-Example](https://github.com/Hostless-Examples/Hostless-Hapi-Example) repo from github
2. Click on 'Create New App'
3. Choose a suitable app name
4. Choose you github account
5. Choose the forked github repo/the cloned remote repo
6. Choose a build system

    1. 'Detect automatically with Nixpicks' - automatically detects the programming language and builds the app
    2. 'Docker' - looks for a Dockerfile in the root of the project and build based on the instructions

7. Input a start command(optional) - By default uses ``yarn start``
8. The PORT environment variable is set by Hostless 
9. Set HOST to 0.0.0.0

#### Sample configuration
![sample](https://res.cloudinary.com/do58rrxug/image/upload/v1713954341/Screenshot_2024-04-24_at_11.25.02_ljtwjp.png)

#### Example project
An example project is hosted on [https://hostless-hapi-example.hostless.app/](https://hostless-hapi-example.hostless.app/)
