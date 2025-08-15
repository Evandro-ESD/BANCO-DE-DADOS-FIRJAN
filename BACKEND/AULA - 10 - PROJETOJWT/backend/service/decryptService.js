// import 

// No parametro terá duas variáveis inputPwd -> senha digitada pelo usuário
// dbPwd -> senha armazenada pelo banco de dados
// inputPwt === dbPwd
const validaPassword = async (inputPwt, dbPwd) => {
    return await inputPwt === dbPwd
}

export default { validaPassword }