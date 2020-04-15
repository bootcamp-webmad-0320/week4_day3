const mongoose = require('mongoose')

// Conexión
mongoose
    .connect('mongodb://localhost/webmad0320', { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err))

// Modelo
const Dog = require('./models/Dog-model')


// // Eliminar los que hagan match con la query
// Dog.deleteMany({ age: 24 })
//     .then(deleteInfo => console.log("La información de la eliminación es", deleteInfo))
//     .catch(err => console.log('Error en la consulta', err))


// // Eliminar el primnero que haga match con la query
// Dog.deleteOne({ age: 24 })
//     .then(deleteInfo => console.log("La información de la eliminación es", deleteInfo))
//     .catch(err => console.log('Error en la consulta', err))


// Eliminar el que coinicda con el id argumentado
Dog.findByIdAndRemove('5e96e46f2b39c40edcd23d78')
    .then(deleteInfo => console.log("La información de la eliminación es", deleteInfo))
    .catch(err => console.log('Error en la consulta', err))