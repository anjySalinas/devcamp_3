//Dependecia commonj
const express=require('express')
const dotenv = require('dotenv')
const colors=require('colors')
//dependencias de rutas:
const bootcampRoutes=require('./routes/bootcampRoutes')
//const coursesRoutes=require('./routes/coursesRoutes')
//const reviewsRoutes=require('./routes/reviewsRoutes')

//DEPENDENCIA PARA CONEXION A DB 
const conectDB=require('./config/db')

dotenv.config({
    path: './config/.env'
})

conectDB()

//crear el objeto app
const app=express()

//express para recibir datos json
app.use(express.json())

//vincular las rutas de bootcamps
app.use('/api/v1/devcamp/bootcamps',bootcampRoutes)
//app.use('/api/v1/devcamp/courses',coursesRoutes)
//app.use('/api/v1/devcamp/reviews',reviewsRoutes)

//primera prueba de url del servidor
app.get('/prueba', function(request, response){
        response.send("Holaaaa");
});


//uris de bootcamps
//evidencia:uris de courses


//evidencia:uris para reviews
//traer todos los reviews
app.get('/api/v1/devcamp/reviews',
(request,response)=>{
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg" : "mostrar todos los reviews"    
                    })
})
//traer reviews por id
app.get('/api/v1/devcamp/reviews/:id',
(request,response)=>{
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg" : `Seleccionando reviews con id ${request.params.id}`  
                    })
})
//crear reviews
app.post('/api/v1/devcamp/reviews',
(request,response)=>{
            response
                    .status(201)
                    .json({
                        "success": true,
                        "msg" : "crear reviews"    
                    })
})
//actualizar reviews por id
app.put('/api/v1/devcamp/reviews/:id',
(request,response)=>{
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg" : `Actualizando  reviews con id ${request.params.id}`  
                    })
})
//eliminar reviews por id
app.delete('/api/v1/devcamp/reviews/:id',
(request,response)=>{
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg" : `Eliminando reviews con id ${request.params.id}`  
                    })
})




//evidencia:uris para users
//traer todos los users
app.get('/api/v1/devcamp/users',
(request,response)=>{
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg" : "mostrar todos los users"    
                    })
})
//traer users por id
app.get('/api/v1/devcamp/users/:id',
(request,response)=>{
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg" : `Seleccionando users con id ${request.params.id}`  
                    })
})
//crear users
app.post('/api/v1/devcamp/users',
(request,response)=>{
            response
                    .status(201)
                    .json({
                        "success": true,
                        "msg" : "crear users"    
                    })
})
//actualizar users por id
app.put('/api/v1/devcamp/users/:id',
(request,response)=>{
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg" : `Actualizando  users con id ${request.params.id}`  
                    })
})
//eliminar users por id
app.delete('/api/v1/devcamp/users/:id',
(request,response)=>{
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg" : `Eliminando users con id ${request.params.id}`  
                    })
})


//establecer un servidor
const PUERTO=process.env.EXPRESS_PORT

app.listen(PUERTO ,
        console.log(`Servidor escuchando en el puerto:${PUERTO}`.bgBlue.red))
