const mongoose = require ('mongoose')

/**Definir el modelo de estudiante */

const Student = mongoose.model('students',{
    name:{
        type: String,
        required: true,
    },
    course:{
        type: String,
        require: true,
        enum: [
            'programacion',
            'ingles',
            'cocina'
        ]
    },
    age:{
        type: Number,
        min: 18,
    }
})

mongoose.connect('mongodb+srv://misanc21:Qwerty123@pruebaestudiantes.8o2ue.mongodb.net/school', 
    {useNewUrlParser: true, 
    useUnifiedTopology: true}, () =>{
        console.log("rfrrf")
        Student.create({
            name: 'Misael',
            course: 'ingles',
            age:30
        })
    });


