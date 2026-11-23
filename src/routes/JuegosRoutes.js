let express=require('express');
let router=express.Router();
let Juegocontrollers=require('../controllers/JuegoControllers')

let juegoController=new Juegocontrollers()
router.post('/juego',juegoController.guardar)
router.get('/juego',juegoController.lista)
router.get('/juego/:id',juegoController.buscarId)
router.put('/juego/:id',juegoController.actualizar)
router.delete('/juego/:id',juegoController.eliminar)



module.exports=router
