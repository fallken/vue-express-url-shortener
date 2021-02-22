<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://gitlab.com/fallken">
    <img src="https://img1.apk.tools/img/xdN-HGo3E3cdDyq-d_5a-GbgH2VX72cIJlnAW4G5R1aiZXxbq_oeP0DqTl9jTo1B7J8=s150" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Url Shortener Full Project</h3>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

this is url shortener project which will generate short urls for the input url that the use submits .
the whole project could be simply loaded and be used with docker-compose . i have provided two compose files :
* one for development 
* one for production 

there are  unit tests associated with both back-end and front-end which will cover the performance of the appilcation . 

### Built With

here are the list of major frameworks and techs used in the project : 
* [Express](https://expressjs.com/)
* [Vue](https://vuejs.org/)
* [Mongodb](https://www.mongodb.com/)
* [Jest](https://jestjs.io/)



<!-- GETTING STARTED -->
## Getting Started

To run the application in the docker compose the only thing needed is the docker and docker-compose installed on your system .


### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```
* mongodb server (if no docker used)
* docker 
* docker-compose
### Installation

1. Clone the repo
    ```sh
    git clone https://gitlab.com/fallken/vue-express-url-shortener.git
    ```

* using docker

    ```
        docker-compose up
    ```

* using npm

    * backend (mongodb server should be provided)
            
            
            1. Install ./backend
                ```
            2. Install NPM packages
                ```sh
                npm install
                ```
            3. run the server
                ```sh
                npm start
                ```
    
    * frontend
            
            
            1. Install ./backend
                ```
            2. Install NPM packages
                ```sh
                npm install
                ```
            3. run the server
                ```sh
                npm run serve
                ```
* runnig tests 

    * backend 
        ```sh
            cd ./backend && npm install && npm run test
        ```    

    * frontend 
        ```sh
            cd ./frontend && npm install && npm run test
        ```

<!-- USAGE EXAMPLES -->
## Usage

This project provides a simple interface for the user to add his/her urls and get a 
short url in response . 
i have provided the list of all shor-urls in the server without pagination  all in the page(wasnt asked to add paginatin )
the user input will be validated and if the user input is not of type url the server will retun error .

<!-- CONTACT -->
## Contact

Faramarz Arsalani - arsalani@outlook.com

Project Link: [https://gitlab.com/fallken/vue-express-url-shortener](https://gitlab.com/fallken/vue-express-url-shortener)
