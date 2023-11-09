const mongoose = require('mongoose')

//definir el modelo para los users

const usersSchema = mongoose.Schema({
    name:{
        type:String,
        unique:[true, "nombre de users debe ser unico"],
        required:[true, "nombre de users requerido"],
        maxlength:[50, "longitud de nombre menos a 50"]
    },
    phone:{
        type:Number,
        maxlength: [1000, "longitus de telefono menor a 10 "]
    },
    address:{
        type: String,
        required:[true, "direccion requerido"],
    },
    topics:{
        type: [String],
        enum: [
            "AI",
            "Frontenda/UX",
            "Backend",
            "DevOps"
        ]
    },
    averageRating: Number,
    createdAt:Date
})

module.exports = mongoose.model('Users',
                                usersSchema)