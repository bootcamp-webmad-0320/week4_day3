const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')


// CONEXIÓN
mongoose
    .connect('mongodb://localhost/webmad0320', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err))



// MODELO
const Schema = mongoose.Schema
const dogSchema = new Schema({
    name: String,
    age: Number,
    color: String
})
const Dog = mongoose.model('Dog', dogSchema)


// MIDDLEWARES
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))


// RUTAS
app.get('/', (req, res, next) => {
    Dog.find()
        .then(allDogs => res.render('index', { dogs: allDogs }))
        .catch(err => console.log("Ha habido un error", err))
})



app.listen(3000, () => console.log("App listening on port 3000"))