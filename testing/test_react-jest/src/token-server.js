import express from 'express';
import jwt from 'jsonwebtoken'
const ACCESS_TOKEN_SECRET='H2ohnye92MNwIEbw1cUgznFJz8lEhCq7louzkZJfgsM';
const ACCESS_TOKEN_LIFE=1200;

const app= express ();
const port =3006;
app.get ('/',(req, res)=>{
    const payload={
        name: 'Alex',
        role: 'admin'
    };
    const accessToken =jwt.sign (payload, ACCESS_TOKEN_SECRET, {expiresIn: ACCESS_TOKEN_LIFE});
    res.send ({accessToken});
});
app.listen(port, ()=>console.log ('App listining on port ${port}'));