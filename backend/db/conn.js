//requerer o siquelize
const sequelize = require('sequelize')

//parametros de conexão
const conn = new sequelize(
    'nomedobanco',
    'usuariodobanco',
    'passwordbanco',{
        host:'localhost',
        dialect:'mysql',
        port:3306
    }
)

try{
    conn.authenticate()
    console.info('banco de dados conectado com sucesso')
} catch (error){
    console.info(`não foi possivel conectar ao banco:,${error}`)
}

module.exports = conn