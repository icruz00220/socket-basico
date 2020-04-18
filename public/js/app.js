var socket = io()

socket.on("connect", function() {
    console.log('conectado!')
})

socket.on("disconnect", function() {
    console.log("desconectado")
})

socket.emit("mensaje", {
    usuario: 'pedro',
    mensaje: 'Hola Mundo'
}, function(res) {
    console.log(res)
})

socket.on('mensaje', function(res) {
    console.log('Servidor:', res);
})