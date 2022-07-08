import { LEAD,LeadStore } from "../models/leads";
import express,{Request,Response} from 'express'


//create the callback

//make an instance of the class to refer to it
const lead = new LeadStore()
const index= async(req:Request,res:Response)=>{
    const leads = await lead.index();
    res.json(leads)
}

const create= async(req:Request,res:Response)=>{
    const newlead:LEAD= {lead_name:"Mohamed",email:"m@gmail.com"}
    const leads = await lead.create(newlead);
    res.json(leads)
}

//create the handler

const leadRouter= (app:express.Application)=>{

    //first restful API
    app.get('/leads',index)
    app.get('/leads/create',create)
}

export default leadRouter