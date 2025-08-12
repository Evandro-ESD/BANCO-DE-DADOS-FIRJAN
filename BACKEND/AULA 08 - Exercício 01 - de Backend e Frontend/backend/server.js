import express from 'express'
import catalogoRoutes from '../backend/routes/catalogoRoutes.js'
import cors from 'cors'

const app = express();
app.use(express.json());

app.use(cors({
    origin: '*', // ou especifique: 'http://127.0.0.1:5500'
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use('/catalogo', catalogoRoutes)

const PORT = process.env.APP_PORT || 3002;
app.listen(PORT, () =>
    console.log(`Conectado ao banco GameShelf!\nServidor rodando na porta ${PORT}`));