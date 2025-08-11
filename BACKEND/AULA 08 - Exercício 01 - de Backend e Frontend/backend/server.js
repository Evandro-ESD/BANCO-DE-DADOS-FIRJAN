import express from 'express'

const app = express();
app.use(express.json());

const PORT = process.env.APP_PORT || 3002;
app.listen(PORT, () => console.log(`Conectado ao banco GameShelf!\nServidor rodando na porta ${PORT}`));