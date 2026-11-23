let conexion=require("../db/db")
let {DataTypes}=require('sequelize')
let personaje=require("./PersonajeModels")

let juego=conexion.define('Juegos',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    precio:{
        type:DataTypes.INTEGER,
        allowNull:true
    }
},
{
    tableName:"juegos",
    timestamps:false
}
)
/* juego.hasMany(personaje,{
    foreignKey:'juego_id',
    as:'personajes'
}) */
module.exports=juego