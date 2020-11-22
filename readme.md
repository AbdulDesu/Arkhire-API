# Android-2 Backend
Beginner & Intermediate Backend

<h1 align="center">ExpressJS - #Arkhire RESTfull-API</h1>

<br> This project, Provide API For Arkhire Android Apps. Arkhire is apps who help any fresh graduate student to more easly get a job, But Not only for fresh graduate
student. Company can Hire the best prospective workers based on their criteria, Arkhire have a target to:</br>
1. Connect Company and prospective workers at a real-time</br>
2. Give Access A Fresh Project for the prospective workers</br>
3. Sort 'them' with company criteria</br>
4. The Transparency information of Project Sallary</br>
5. And many more..</br>

## Package used in this project

[![Express.js](https://img.shields.io/badge/Express.js-4.x-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v.12.13-green.svg?style=rounded-square)](https://nodejs.org/)
[![MySql](https://img.shields.io/badge/Mysql-v.2.18.1-blue.svg?style=rounded-square)](https://www.npmjs.com/package/mysql)
[![Body-Parser](https://img.shields.io/badge/BodyParser-v.1.19.0-yellow.svg?style=rounded-square)](https://www.npmjs.com/package/body-parser)
[![dotenv](https://img.shields.io/badge/dotenv-v.8.2.0-cyan.svg?style=rounded-square)](https://www.npmjs.com/package/dotenv)
[![bcrypt](https://img.shields.io/badge/bycrypt-v.5.0.0-magenta.svg?style=rounded-square)](https://www.npmjs.com/package/bcrypt)
[![cors](https://img.shields.io/badge/cors-v.2.8.5-brown.svg?style=rounded-square)](https://www.npmjs.com/package/cors)
[![jsonwebtoken](https://img.shields.io/badge/jsonwebtoken-v.8.5.1-purple.svg?style=rounded-square)](https://www.npmjs.com/package/jsonwebtoken)
[![morgan](https://img.shields.io/badge/morgan-v.1.10.0-pink.svg?style=rounded-square)](https://www.npmjs.com/package/morgan)
[![multer](https://img.shields.io/badge/multer-v.1.4.2-red.svg?style=rounded-square)](https://www.npmjs.com/package/multer)
[![salt](https://img.shields.io/badge/salt-v.0.5.5-black.svg?style=rounded-square)](https://www.npmjs.com/package/multer)

## Requirements

1. <a href="https://nodejs.org/en/download/">Node Js</a>
2. Node_modules
3. <a href="https://www.getpostman.com/">Postman</a>
4. Web Server (ex. localhost)

## How to run the app ?

1. Open app's directory in CMD or Terminal
2. Type `npm install`
3. Make new file a called **.env**, set up first [here](#set-up-env-file)
4. Turn on Web Server and MySQL can using Third-party tool like xampp, etc.
5. Create a database with the name arkhire, and Import file sql to **phpmyadmin**
6. Open Postman desktop application or Chrome web app extension that has installed before
7. Choose HTTP Method and enter request url.(ex. localhost:3000/)
8. You can see all the end point [here](#end-point)

## Set up .env file

Open .env file on your favorite code editor, and copy paste this code below :

```
DB_HOST= YOUR_DB_HOST
DB_USER= YOUR_DB_USER
DB_PASSWORD= YOUR_DB_PASSWORD
DB_DATABASE= YOUR_DATABASE

PORT=YUR_PORT

JWT_KEY =YOUR_JWT_KEY
ADMIN_KEY =YOUR_ADMIN_KEY
```


## Link Postman  

You can see all the endpoint, In My Postman Documentation here:
https://documenter.getpostman.com/view/13582341/TVev4Q5k
