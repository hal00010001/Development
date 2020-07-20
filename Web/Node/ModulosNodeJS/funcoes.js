function validar(login, senha){
    if(login == 'almir' && senha == '1234')
        return true;
    return false;
}

exports.validarUsuario = validar;