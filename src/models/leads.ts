import client from "../database"

export  type LEAD={
lead_name:String,
email:String
}

//create the class the represent the table and each instant is the row


export class LeadStore {
    //the first CRUD

    async index():Promise<LEAD[]>{
        const conn = await client.connect()
        const sql= 'SELECT * FROM leads'
        const results= await conn.query(sql)
        conn.release()
        return results.rows
    }
    async show(id:String):Promise<LEAD>{
        const conn = await client.connect()
        const sql= 'SELECT * FROM leads WHERE id=($1)'
        const results= await conn.query(sql,[id])
        conn.release()
        return results.rows[0]
    }
    async edit(id:String,lead:LEAD):Promise<LEAD>{
        const conn = await client.connect()
        const sql= 'UPDATE leads SET lead_name=$1,email=$2 FROM leads WHERE id=($1)'
        const results= await conn.query(sql,[lead.lead_name,lead.email])
        conn.release()
        return results.rows[0]
    }
    async create(lead:LEAD):Promise<LEAD>{
        const conn = await client.connect()
        const sql= 'INSERT INTO leads (lead_name,email) VALUES ($1,$2)'
        const results= await conn.query(sql,[lead.lead_name,lead.email])
        conn.release()
        return results.rows[0]
    }
    async destroy(id:String):Promise<LEAD[]>{
        const conn = await client.connect()
        const sql= 'DELETE * FROM leads WHERE id=($1)'
        const results= await conn.query(sql,[id])
        conn.release()
        return results.rows
    }
}




