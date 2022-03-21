const express = require('express');
const router = express.Router();
 
let userx =[];

router.post('/register', (request,response) => {

    const { email,password } = request.body;

    const account = userx.find(x => x.email == email);
    if(account){
        return response.status(200).json({
            message: `User exist`
        });
    }
    else{
    userx.push({email:email, password:password});
    return response.status(200).json({
        message: `Account created`,
        user_count: userx.length,
        data: userx        
        });
    }
})

module.exports = router;