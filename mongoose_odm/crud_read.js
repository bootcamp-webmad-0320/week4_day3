const mongoose = require('mongoose')

// Conexión
mongoose
    .connect('mongodb://localhost/webmad0320', { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err))

// Modelo
const Dog = require('./models/Dog-model')



// // Encontrar todos los items (sin argumento): retorna array
// Dog.find()
//     .then(allTheDogs => console.log("Estos son todos los perros!:", allTheDogs))
//     .catch(err => console.log('Error en la consulta', err))



// // Encontrar todos los items filtrados (filtro como argumento): retorna array
// Dog.find({ age: { $lt: 10 } })
//     .then(youngDogs => console.log("Estos son los perros jovenes:", youngDogs))
//     .catch(err => console.log('Error en la consulta', err))



// // Encontrar el item del ID argumentado: retorna objeto
// Dog.findById('5e96e46f2b39c40edcd23d78')
//     .then(theMatchingIDdog => console.log("El perro con id coincixente es", theMatchingIDdog))
//     .catch(err => console.log('Error en la consulta', err))


// Dog.findOne(query, projection, sort, options)


// Encontrar el primero item que haga match con el filtero argumentado: retorna objeto
Dog.findOne({ name: 'Popino' })
    .then(theFirstMatchingIDdog => console.log("El primer perro que ha hecho match es", theFirstMatchingIDdog))
    .catch(err => console.log('Error en la consulta', err))


// BONUS: CONTAR DOCUMENTOS
Dog.countDocuments({ name: 'Popino' })
    .then(total => console.log("Los perros con nombre Popino son", total))
    .catch(err => console.log('Error en la consulta', err))