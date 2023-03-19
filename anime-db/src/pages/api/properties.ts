// import { RequestHandler } from 'express';
import { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(req: Request, res: { json: (arg0: { hello: string; }) => void; }) 
{
    const {db} = await connectToDatabase();

    const data = await db.collection("animes").find({}).limit(5).toArray();
    console.log(data);
    
    res.json(data);
}
