let juego=require('../models/JuegoModels')

class Juegocontrollers{
    guardar=async(req,res)=>{
        let {nombre,precio}=req.body
        //funcion sequelize=insert into nombre tabla (campo) values
        let respuesta=await juego.create({nombre,precio})
        return res.json({
            mensaje:"juego resgistrado correctamente"
        })
    }
    lista=async(req,res)=>{
       let resp=await juego.findAll() 
       return res.json({
        respuestas:resp
       })
    }
    buscarId=async(req,res)=>{
        let{id}=req.params
        let busca=await juego.findByPk(id)
        return res.json({
            respuesta:busca
        })
    }
    actualizar=async(req,res)=>{
        let id=req.params.id
        let {nombre,precio}=req.body
        let busca=await juego.findByPk(id)
        if (busca){
            await busca.update({
                nombre,
                precio
            })
            return res.json({
                mensaje:"elemento actializado",
                registro:busca
            })
        }
    }
    eliminar=async(req,res)=>{
        let id=req.params.id
        let busca=await juego.findByPk(id)
        if (busca){
            await busca.destroy()
            return res.json({
                mensaje:"eleminto eliminado",
            })
        }


    }
}
module.exports=Juegocontrollers