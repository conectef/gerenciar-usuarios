const usuarios = [
    {
        nome: 'Denis',
        email: 'denis@denis.com'
    },
    {
        nome: 'Monica',
        email: 'monica@denis.com'
    },
    {
        nome: 'Maria',
        email: 'maria@denis.com'
    },
    {
        nome: 'Samanta',
        email: 'samanta@denis.com'
    }
];

function retornarUsuarios(){
    return usuarios;
}

function adicionarNovoUsuario(usuario) {
    usuarios.push(usuario);
}



module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}