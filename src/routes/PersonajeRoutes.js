let express=require('express');
let route=express.Router();
let Personajecomtrollers=require('../controllers/PersonajeComtrollers')

let personajeComtrollers=new Personajecomtrollers()
route.post('/personaje',personajeComtrollers.guardar)
route.get('/personaje',personajeComtrollers.lista)
route.get('/personaje/:id',personajeComtrollers.buscarId)
route.put('/personaje/:id',personajeComtrollers.actualizar)
route.delete('/personaje/:id',personajeComtrollers.eliminar)



module.exports=route