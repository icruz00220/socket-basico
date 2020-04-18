let { io } = require('../server')

io.on("connection", (client) => {
    console.log("conectado");

    client.emit('mensaje', {
        usuario: 'Servidor',
        mensaje: 'Bienvenido!'
    })

    client.on('mensaje', (msj, callback) => {
        console.log(msj);

        if (msj.usuario) {
            callback({ res: 'Todo bien!' })
            client.broadcast.emit('mensaje', msj)
        } else
            callback({ res: 'Todo mal :(' })

    })

    client.on('disconnect', () => {
        console.log('Desconectado');
    })
})