const express = require('express');
const cors = require('cors')
const routes = require('./routes') /* o ./ é necessario pois é um arquivo e não um pacote */
const app = express();


app.use(cors({
  origin: 'url'
}))
app.use(express.json())
app.use(routes)

app.listen(3333);


/* ctrl + ' : abre o terminal do index  
   ctrl + c : cancelar comando no terminal
   usamos 24/03:
   knex
   cors
   sqlite
   */

/*rotas recursos */
/*metodos HTTP

GET: buscar/listar informação no back-end
POST: criar  informaçao no backend
PUT: alterar um informação no backend
DELETE: deletar informação no backend
*/
/*Tipos de parâmentros

Query: Parametros nomeados enviados na rota após um '?' (filtros, paginação) o and é '&'
Route Params: Parametros para identificar recursos ':'
Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*Banco de Dados 

SQL: SQLite, MySQL, PostgreSQL, Oracle, Microsoft SQL Server
NoSQL: MongoDB, CouchDB, etc
*/
/* Driver BD:      SELECT * FROM users
  Query Builder:   table('users').select('*').where()
    */



