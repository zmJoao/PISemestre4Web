//requerer somente o 
const {DataTypes} = require('sequelize')
//requerer a conexão com o banco
const conn = require('../db/conn')

//define o model user
const user = conn.define('users',{
    name:{
        type: DataTypes.STRING,
        required: true
    },
    email:{
        type: DataTypes.STRING,
        required: true
    },
    password:{
        type: DataTypes.STRING,
        required: true
    },
    image:{
        type: DataTypes.STRING,
    },
    phone:{
        type: DataTypes.STRING,
        required: true
    }
})

module.exports = user