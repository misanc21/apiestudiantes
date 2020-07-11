const mongoose = require ('mongoose')
const express = require ('express')
const app = express()

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
/**Midleware */
app.use(express.json())

/**Endpoints */
app.get('/students', async (request, response) =>{
    const allStudents  = await Student.find()

    response.json({
        success:true,
        data: {
            students : allStudents
        }
    })
})

app.post('/students', async (request,response) =>{
    const studentInfo = request.body
    const newStudent = await Student.create(studentInfo)
    response.json({
        success:true,
        data:{
            student: newStudent
        }
    })
})

app.delete('/students/:id', async (request, response)=>{
    try{
        const id = request.params.id
        const studentDeleted = await Student.findByIdAndDelete(id)
        response.json({
            success:true,
            data:{
                student: studentDeleted
            }
        })
    }catch(error){
        response.status = 400
        response.json({
            success:false,
            error: error.message
        })
    }
})




mongoose.connect('mongodb+srv://misanc21:Qwerty123@pruebaestudiantes.8o2ue.mongodb.net/school', 
    {useNewUrlParser: true, 
    useUnifiedTopology: true}, () =>{
        app.listen(8080, () =>{
            console.log('Server is ready')
        })
    });


