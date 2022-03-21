const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
 
let userx =[];

router.post('/register', async (request,response) => {

    const { email,password } = request.body;

    const account = userx.find(x => x.email == email);
    if(account){
        return response.status(200).json({
            message: `User exist`
        });
    }
    else{

        const hash_password = await bcryptjs.hash(password,10);

    userx.push({email:email, password:hash_password});
    return response.status(200).json({
        message: `Account created`,
        user_count: userx.length,
        data: userx        
        });
    }
})

module.exports = router;