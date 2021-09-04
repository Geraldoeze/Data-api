// if you want to run the db.json file on a different port change
// 5000 to the port number of your choice

const jsonServer = require('json-server');
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(process.env.PORT || 5000, () => {
    console.log('JSON is running')
})