const express=require('express')
const todo=require('../logic/logic')
const upload=require('../multer/storageconfig')
const jswmiddle=require('./token')

const router=express.Router()
const userData=require('../logic/userlogic')
router.post('/tododata',todo.Todo)
router.post('/register',userData.userRegister)
router.post('/todos',upload.single('user'),jswmiddle.jwtmiddleware,userData.todo)
router.post('/login',userData.Login)
router.get("/alldata",upload.single('user'),jswmiddle.jwtmiddleware,userData.Tdata)
router.put("/deletetodo",upload.single('user'),jswmiddle.jwtmiddleware,userData.deletetask)
router.get("/theloader",userData.ServerLoader)
module.exports=router