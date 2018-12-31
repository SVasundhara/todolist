const express=require('express')
const srv=express()


const todoRoute=require('./todolist')

srv.use(express.json())
srv.use(express.urlencoded({extended:true}))

srv.use('/todo',todoRoute)


srv.listen(2000)