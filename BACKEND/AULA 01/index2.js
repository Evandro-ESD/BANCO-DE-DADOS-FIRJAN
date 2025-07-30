const express = require('express');
const app = express();
// maperar uma tota home
app.get("/", (req, res) => {
    res.send('Olá, Mundo!!!!')
})

app.get("/sobre", (req, res) => {
    res.send('Essa é a rota sobre!')

})
app.get("/json", (req, res) => {
    res.send({
        msg: 'Essa é a rota json!'
    })
})

app.get("/saudacao/:nome/:idade", (req, res) => {
    const nome = req.params.nome
    const idade = req.params.idade

    // res.json({ usuarios: { nome, idade } })
    const usuarios = { nome, idade }

    // res.send(`O nome ${usuarios.nome} e a idade é ${usuarios.idade}`)
    res.send(`O nome ${nome} e a idade é ${idade}`)
})

const PORT = 3005
app.listen(PORT, () => {
    console.log(`Serviço rodando na porta: ${PORT}`)
});

