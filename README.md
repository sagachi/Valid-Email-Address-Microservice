# CS361 Valid Email Address Microservice

### This microservice validates a given email address and returns a JSON object with the results.

## Getting Started

### 1. Clone the repo
### git@github.com:sagachi/Valid-Email-Address-Microservice.git
### 2. Install NPM packages
### npm install
### 3. Start the server from the root directory
### node server.mjs

## How to request an email validation
### The client can make HTTP calls to the appropriate route to validate an email address. 
### The microservice checks the email format, the domain (MX records), and optionally the SMTP mailbox depending on the request parameters.

### Base URL: http://localhost:3000
### Endpoint path: /api/v1/validate/email
### This microservice uses POST and expects the following fields in the request body: email(required), checkDomain (optional and default: true), checkSMTP (optional and default: false).

### Example URL: http://localhost:3000/api/v1/validate/email

### Example of a GET request using fetch:
### const BASE_URL = "http://localhost:3000/api/v1/validate/email";

fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        email: "test@gmail.com",
        checkDomain: true,
        checkSMTP: false
    })
})
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error(error);
});

## How to receive email validation data
### The server sends back a JSON object with the results.

### Example response:
### {
    "valid": true,
    "reason": "Email exists and domain is valid",
    "details": {
        "format": true,
        "domain": true,
        "smtp": false
    }
}



