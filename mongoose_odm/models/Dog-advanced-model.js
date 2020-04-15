const mongoose = require('mongoose')

const Schema = mongoose.Schema

const dogSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: 'Desconocido',
        trim: true,
        set: name => name.charAt(0).toUpperCase() + name.substring(1)
    },
    age: {
        type: Number,
        max: 10
    },
    color: {
        type: String,
        required: true,
        enum: ['Blanco', 'Negro', 'Gris', 'Toffe', 'Muilticolor']
    },
    chip: {
        type: String,
        validate: {     // is validator, retorna true, pasa. sino, sale el mensaje
            validator: code => code.startsWith('MAD-'),
            message: "Sólo perro de Madrid! (chip MAD-XXXXX)"
        }
    }
})

const Dog = mongoose.model('Dog', dogSchema)

module.exports = Dog