# Full Stack MERN Project 
## eDoatap - Hellenic National Academic Recognition and Information Center 

### Team:
1. Γιάννης Κωνσταντίνου 1115201700067
2. Κωνσταντίνος Θεοφίλης 1115201600287
3. Σπύρος Κάντας 1115201800059

Project Repository: <br>
[![start](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/kostantinostheo/e-doatap)


### Project Info:
- Front-End: <b>React</b>
- Back-End: <b>Node.js ~ Express-API</b>
- Database: <b>MongoDB</b>
- Deploy: <b>Docker</b>

---

### A. Local Execution (Recommended) ![Build Status](http://nikitas-dev-badges.s3-website-us-east-1.amazonaws.com/local-badges/build-status.svg)

#### 1. <b>Dependencies installation [Windows OS]</b>:

To execute our project locally, you need to have <b>Node.js</b> and <b>MongoDB</b> intalled to your system. <br>
<b>You can download the software from the links bellow:</b><br>
[Node.js Download](https://nodejs.org/en/download/)<br>
[MongoDB Download](https://docs.mongodb.com/manual/administration/install-community/)

After installation finish: 
- Be sure that the direcory `C:\Program Files\MongoDB\Server\<version>\bin` was successfully created.
- Check your Node.js version with `node --version` in you command line. The version should appear like `v14.17.0`

#### 2. <b>Execution</b>
- Navigate to our project root directory `/edoatap` and type the following command in your commnad line:
```
npm run dev
 ```
and you are ready, now wait and the script will take care of all packages dependencies and it'll make sure to work.

--- 

### B. Docker Execution ![Docker](https://img.shields.io/docker/cloud/build/eaudeweb/scratch?label=Docker&style=flat)

#### 1. <b>Dependencies installation [Linux OS]</b>:

- Open a terminal window and update the local repository with:<br>
```sudo apt update```<br>

- Before installing the software, make sure you remove any old Docker packages on your Ubuntu by running the command:<br>
  ```sudo apt-get remove docker docker-engine docker.io```

- Now let’s install Docker on Ubuntu. Run the following command in the terminal window:<br>
  ```sudo apt install docker.io```  <br>
Type `y` and hit `Enter` to confirm the installation. Once the install is completed, the output notifies you Docker has been installed.

- To verify the installation check the Docker version:<br>
  ```docker –version```

	The output displays the Docker version. Should look like this:<br>
  `Docker version 20.10.12, build e91ed57`

#### 2. <b>Starting Docker Service</b>:

- Start the Docker service by running:<br>
  ```sudo systemctl start docker```

- Then, enable it to run at startup:<br>
  ```sudo systemctl enable docker```

- To check the status of the service, run:<br>
  ```sudo systemctl status docker```<br>
  The output should verify that Docker is up and running. 

--- 

### Project Structure

#### React Application Structure [Front-End]:

- Inside `/edoatap/edoatap/src` you will find:
  - a direcory `/components` having all the <b>html</b> and <b>css</b> elements that our front-end use,
  - a direcory `/images` and
  - a direcory `/utils`. <br/>

Also inside `/src` you will find the main React file `App.js`
 
#### NodeJS ~ API Structure [Back-End]:

- Inside `/edoatap/server` you will find:
  - a direcory `/models` with the Schemas of our MongoDB collections,
  - a direcory `/routes` with the API call routes (the URIs that out api listen)
  - a `server.js` file. This is the main file for out connection with the database.
  
  <br>