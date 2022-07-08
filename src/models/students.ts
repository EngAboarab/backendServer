import client from '../database'

//create the type 
export type Student={
    student_name:String,
    email:String,
    pass:String
} 

//create the class

export class StudentsStore{
    //create the crud methods

    async index():Promise<Student[]>{
        const conn = await client.connect()
        const sql = 'SELECT * FROM student'
        const results = await conn.query(sql)
        conn.release()
        return results.rows
    }

    async edit(id:String,student:Student):Promise<Student>{
        const conn = await client.connect()
        const sql= 'UPDATE student SET lead_name=$1,email=$2 FROM leads WHERE id=($1)'
        const results= await conn.query(sql,[student.student_name,student.email])
        conn.release()
        return results.rows[0]
    }
    async create(student:Student):Promise<Student>{
        
            const conn = await client.connect()
            const sql= 'INSERT INTO student (student_name,email,pass) VALUES ($1,$2,$3)'
            const results= await conn.query(sql,[student.student_name,student.email,student.pass])
            conn.release()
            return results.rows[0]
     
        
    }
    async destroy(id:String):Promise<Student[]>{
        const conn = await client.connect()
        const sql= 'DELETE * FROM student WHERE id=($1)'
        const results= await conn.query(sql,[id])
        conn.release()
        return results.rows
    }

}