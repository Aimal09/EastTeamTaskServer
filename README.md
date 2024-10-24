This is the server application for this Task. Should be running in praller to use APIs

>**Note**: The server is created in NodeJS, Express and MongoDB make sure to have these setup in your enviroment.

>**Note**: Entry point is index.js

# Getting Started

## Tools needs to setup the enviroment
```bash
node version 20
MongoDB
```

## Step 1: Install npm libraries to start the server

Use these commands from the _root_ of your Server project: 
```bash
#using npm
npm install

npm start
```


## Step 2: Start your Application

PORT is set to 5001 in ```.env``` file. 

## Documentation

This project used MongoDB as database. The database name used is ```easyteam``` having two collections 

```bash
1: employess
2: locations
```

To start with sign in you setup empoyees by following steps

```bash
#Adding a Location
#using postman or any API tool to call to following API 

#Endpoint
POST: http://localhost:5001/api/addLocation 

#Body
{"name": *"your_location_name"*} #responed with a _id.

#Adding employee
#using following API

#Endpoint
POST: http://localhost:5001/api/addEmployee 

#Body
#responed with a _id.
{
    "name":"John Doe",
    "password":"abc1234",
    "locationId":*"_id from above response"*,
    "organizationId":*"_id from above response"*,
    "payrollId": "1",
    "employeePayrollId": "1",
    "accessRole": {
        "name":"admin", // <"admin" / "manager">
        "permissions": ["LOCATION_READ","SHIFT_READ","SHIFT_ADD","SHIFT_WRITE"]
    },
    "role":{
        "name":"admin" // <"admin" / "manager">
    },
    "picture":"image_url"
}
```

Now you can use frontend mobile app with these users.