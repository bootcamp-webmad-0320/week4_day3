const mongoose = require('mongoose')

// Conexión
mongoose
    .connect('mongodb://localhost/webmad0320', { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err))

// Modelo
const Dog = require('./models/Dog-model')



// // Actualizar todos los que cumplan la query: retorna array
// Dog.updateMany({ name: 'Popino' }, { age: 18 })
//     .then(allUpdatedDogs => console.log("Los perros actualizados son", allUpdatedDogs.nModified, 'perros en total!'))
//     .catch(err => console.log('Error en la consulta', err))



// // Actualizar el primoer que cumpla la query: retorna detalles
// Dog.updateOne({ name: 'Pistacho' }, { color: 'Azul' })
//     .then(theUpdatedDog => console.log("Los perros actualizados son", allUpdatedDogs.nModified, 'perros en total!'))
//     .catch(err => console.log('Error en la consulta', err))



// Actualizar el que coincida con el ID: RETORNA EL ELEMENTO ANTIGUO
// Para retornar el nuevo, añadi el argumento opcional {new: true}
Dog.findByIdAndUpdate('5e96e46f2b39c40edcd23d77', { color: 'Amarillo' }, { new: true }) // <= !!!!
    .then(theUpdatedDog => console.log("El perro actualizado es", theUpdatedDog))
    .catch(err => console.log('Error en la consulta', err))