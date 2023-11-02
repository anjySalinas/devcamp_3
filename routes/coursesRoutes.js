/*const express = require('express')
const router = express.Router()

//traer todos los curses
router.get('/',
(request,response)=>{
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg" : "mostrar todos los curses"    
                    })
})
//traer curses por id
router.get('/:id',
(request,response)=>{
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg" : `Seleccionando curses con id ${request.params.id}`  
                    })
})
//crear curses
router.post('/',
(request,response)=>{
            response
                    .status(201)
                    .json({
                        "success": true,
                        "msg" : "crear curses"    
                    })
})
//actualizar curses por id
router.put('/:id',
(request,response)=>{
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg" : `Actualizando  curses con id ${request.params.id}`  
                    })
})
//eliminar curses por id
router.delete('/:id',
(request,response)=>{
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg" : `Eliminando curses con id ${request.params.id}`  
                    })
})

module.exports=router*/