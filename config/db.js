import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config({ path: './config/config.env' })

mongoose.set('strictQuery', false);

const database = process.env.DATABASE.replace('<USER:PASSWORD>', process.env.DATABASE_USER_AND_PASS)

mongoose
    .connect(database, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connexion à la base de donnée réussie !')
    })
    .catch(err => {
        console.log('Impossible de se connecter à la base de donnée', err)
    })