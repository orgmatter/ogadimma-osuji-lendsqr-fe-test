# Project Documentation

## Overview

The Lendsqr frontend test, is a project that requires the candidate to implement several screens related to the corebanking dashboard of an organisation.\
The screen comprises of several UI flows and the candidate is expected to implement them as well as their functionalities.

## Software and Technical Requirements

The project is built with ReactJS/TypeScript and it requires a node version of 14 and above to run optimally.

## Project Boilerplates and Roadmaps

Below we would be looking at the various project folder structures and how best to navigate through it efficiently.

### `The App Entry Point`

This is the basic App.tsx file where every other tsx files are launched from, and it is found within the root of the src directory.

### `The Pages and Component`

As the name implies, these folders is where all pages and components of the application are designed from respectively.\
The pages folder include the Login and the Dashboard files as well as the **auth-controller file** which serves as a middleware that controlles both authenticated and unaunthorised access to the app, and can be accessed thus; **src->pages->Login.tsx|Dashboard.tsx|auth-controller.js**\
The component folder includes all components related to the the Dashboard, Login, Header and Side Drawer of the application. It can be accessed thus; **src->components->Dashboard|Login|Header|SideDrawer** respectively

### `The Hooks`
The hooks folder includes all custom or user defined hooks used accross the application. It can be accessed thus; **src->hooks->useAuth.js|useFormValidation.js|useMedia.js|useStorage.js|useTypes.js** respectively

### `The Images`
The images folder includes an index.js file that maps to all image resources found in the public asset folder of the application. It can be accessed thus; **src->images->index.js**

### `The URL Routes`
The routes folder carries the index.js file that list all url routes and subroutes of the application and it can be accessed thus: **src->routes->index.js**

### `The Store`
This is the folder where all operations related to the react redux state management are handled. It comprises of the actions and reducers folders, initial states and types js files and can be accessed by navigating into the **src->store->index.js|actions|reducers|types|states.js** respectively

### `The Types`
The types folder is where all datatypes and interfaces related to the various components are declared. It can be accessed by going into the **src->types->dashboard.ts|login.ts|header-comp.ts|side-drawer-comp.ts** respectively

### `The Styles`
The styling of this application was built using SASS a robust and highly programmable css library. Accessing this folder would various subfolders that are used in styling the application such as the pages->partials, the defaults that holds the variables|typographies files, and most importantly the device folder for all styles related to the device screens and responsiveness. To access this folder you can navigate into the **src->sass->pages|defaults|devices|app.scss** respectively.


## Third Party Integration - Credits
This application would not have been easily put together without the help of some third party support. So I'd like to use this opportunity to give credits to the following vendors listed below:
- [Material UI - for all UI support](https://mui.com)
- [Mockbin - for all API mocks and simulations](https://mockbin.io)
- [Netlify - for all hosting services](https://netlify.app)


## How To Run The Application
This application is built with ReactJS and Typescript;\ Below are steps to follow when setting it up to run on your local machine.
- First and foremost, make sure you are running on a node version of 14 and above for a smooth and stable operation then;
- Clone the repo into your local machine, you can do that with this command -
 **git clone https://github.com/orgmatter/ogadimma-osuji-lendsqr-fe-test.git** which will create a new directory called **ogadimma-osuji-lendsqr-fe-test** in your computer
- CD into your new project directory and run **`npm install`** to install all dependencies used by the application
- After installing all the dependencies with the above command, you can launch the application on a localhost:3000 using this command **`npm start`**


## Usage and Demo
The app is currently being hosted on Netlify, the url and login credentials to the app are provided below;

### `The Url`

[Ogadimma Osuji Lendsqr Frontend Test](https://ogadimma-osuji-lendsqr-fe-test.netlify.app)

### `The Login Credentials`

-   email: "admin1@lendsqr.com"\
    password: "password1"

-   email: "admin2@lendsqr.com"\
    password: "password2"

-   email: "admin3@lendsqr.com"\
    password: "password3"
