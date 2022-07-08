import { LeadStore,LEAD } from "../../models/leads";
import client from "../../database";

const store = new LeadStore;

describe('lead model testind',()=>{
    it('it has an index method',()=>{
        expect(store.index).toBeDefined
    })

    it ('the methode index will return a value not null',async()=>{
        const results= await store.index();
        expect(results).toEqual([])
    })
})