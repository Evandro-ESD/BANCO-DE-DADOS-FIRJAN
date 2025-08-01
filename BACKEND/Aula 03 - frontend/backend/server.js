const app = require('./src/app')

const PORT = 3008
app.listen(PORT, () => {
    console.log(`Servidort rodando em http://localhost:${PORT}`)
})