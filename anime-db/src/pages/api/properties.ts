// import { RequestHandler } from 'express';
import connectToDatabase from '../../../lib/mongodb';

export default async (req: Request, res: { json: (arg0: { hello: string; }) => void; }) =>
{
    try {
        const {db} = await connectToDatabase();
        
        const data = await db.collection("animes").find({}).limit(5).toArray();
        console.log(data);
        
        res.json(data);
    
    } catch(e) {
        console.error(e);
    }
     
      
}
