const express = require('express');
const router = express.Router();

let users = [];

router.post('/register', (request,response) => {

    //const user_email = request.body.email;
    //const user_password = request.body.password;
    const { email,password } = request.body;

    users.push({email:email, password:password});

    return response.status(200).json({
        message: users
    });

})

router.get('/greeting', (request,response) => {
    return response.status(200).json({
        message: 'Welcome to my node.js API'
    });
});



module.exports = router;