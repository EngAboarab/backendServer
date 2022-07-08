import { Student,StudentsStore } from "../models/students";
import express ,{Request,Response} from 'express'
import bcrypt from 'bcrypt'

import dotenv from 'dotenv'

dotenv.config()

const {SALT_ROUND}=process.env

const store= new StudentsStore()
// create the crospondance methode
//create the handler
const index =async(_req:Request,res:Response):Promise<void>=>{
const students:Student[]= await store.index();
res.json(students)

}
const create= async(req:Request,res:Response):Promise<void>=>{
    const newStudent:Student= {student_name:"Mohamed",email:"m@gmail.com",pass:'123456'}
    
    //here we have to make the hashes
     const hashedPass= bcrypt.hashSync(newStudent.pass.toString(),10)
  
     newStudent.pass=hashedPass;

    
  
    const students = await store.create(newStudent);
    res.json(students)
}

const studentsRouter =(app:express.Application)=>{
    app.get('/students',index)
    app.get('/students/create',create)
}

export default studentsRouter