let personaje=require('../models/PersonajeModels')

class Personajecomtrollers{
    guardar=async(req,res)=>{
        let {nombrePer,juego_id}=req.body
        //funcion sequelize=insert into nombre tabla (campo) values
        let respuesta=await personaje.create({nombrePer,juego_id})
        return res.json({
            mensaje:"personaje resgistrado correctamente"
        })
    }
    lista=async(req,res)=>{
       let resp=await personaje.findAll() 
       return res.json({
        respuestas:resp
       })
    }
    buscarId=async(req,res)=>{
        let{id}=req.params
        let busca=await personaje.findByPk(id)
        return res.json({
            respuesta:busca
        })
    }
    actualizar=async(req,res)=>{
        let id=req.params.id
        let {nombrePer,juego_id}=req.body
        let busca=await personaje.findByPk(id)
        if (busca){
            await busca.update({
                nombrePer,
                juego_id
            })
            return res.json({
                mensaje:"personaje actualizado",
                registro:busca
            })
        }
    }
    eliminar=async(req,res)=>{
        let id=req.params.id
        let busca=await personaje.findByPk(id)
        if (busca){
            await busca.destroy()
            return res.json({
                mensaje:"personaje eliminado",
            })
        }


    }
}
module.exports=Personajecomtrollers