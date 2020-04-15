const mongoose = require('mongoose')

// Conexión
mongoose
    .connect('mongodb://localhost/webmad0320', { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err))

// Modelo
const Dog = require('./models/Dog-model')



// // Crear un registro
// Dog.create({ name: 'Popino', age: 14, color: 'Toffe' })
//     .then(newDogCreated => console.log('El perro que se ha creado es:', newDogCreated))
//     .catch(err => console.log('Error creadno el item', err))



// Crear varios registros
Dog.create([
    { name: 'Lassie', age: 24, color: 'Blanco' },
    { name: 'Pistacho', age: 6, color: 'Gris' },
    { name: 'Cartucho', age: 9, color: 'Negro' }
])
    .then(newDogsCreated => console.log('Los perros que se han creado son:', newDogsCreated))
    .catch(err => console.log('Error creadno el item', err))