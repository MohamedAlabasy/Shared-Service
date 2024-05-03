<h1 align="center">Nest.JS Shared Service</h1>

## Description:

It often happens that while working on one project, you need to use another project from within it.  
For example, If you have more than one service and need to use a unified schema or any code shared between these services.  
In this project, I use [Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules) to do that.

## Starting with Submodules

`Step 1` : Create shared project (`Submodules`), in our example must install [Node.js](https://nodejs.org/en/), [Nest.Js](https://nestjs.com/) and [Mongodb](https://www.mongodb.com/try/download/community).

`Step 2` : Go to main project to add Submodules `URL`.

```
$ git submodule add https://github.com/MohamedAlabasy/Shared-Service
```

Now every service to which `submodules` have been added can use the `shared-service`

## Services used in this example

`First-Service` : [Click-Here](https://github.com/MohamedAlabasy/First-Service) to see the first service.

`Second-Service` : [Click-Here](https://github.com/MohamedAlabasy/Second-Service) to see the second service..
