const express = require('express');
const cors = require('cors');
let router=require('./src/routes/JuegosRoutes')
let route=require('./src/routes/PersonajeRoutes')
let conexion=require('./src/db/db')
require('dotenv').config()
PORT=process.env.PORT

let app=express()
app.use(express.json())
app.use(cors())

app.use('/api',router)
app.use('/per',route)


app.listen(PORT, () => {
    console.log("servidor ejecutandose "+PORT);
});
