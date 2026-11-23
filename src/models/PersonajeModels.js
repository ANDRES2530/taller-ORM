let conexion=require("../db/db")
let {DataTypes}=require('sequelize')
let juego=require('./JuegoModels')

let personaje=conexion.define('Personaje',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombrePer:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    juego_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},
{
    tableName:"personajes",
    timestamps:false
}
)
/* personaje.belongsTo(juego,{
    foreignKey:'juego_id',
    as:'juego'
}) */

module.exports=personaje