// import { RequestHandler } from 'express';
import { error } from 'console';
import connectToDatabase from '../../../lib/mongodb';

export default async (req: Request, res: { json: (arg0: { hello: string; }) => void; }) =>
{
    try {
        const client:any = await connectToDatabase;
        const db = client.db("AnimeDB");
        const data = await db.collection("animes").find({}).limit(5).toArray();
        console.log(data);
        
        res.json(data);
    
    } catch(e) {
        console.error(e);
    }
     
      
}
