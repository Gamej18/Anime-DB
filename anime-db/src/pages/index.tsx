import Head from 'next/head';
import { connectToDatabase } from "../../lib/mongodb";


export default function HomePage({properties}: {properties: string}) {
  
  console.log(properties)
  return (
    <div>
      Welcome!
        <title>Creat Next App</title>
        <link rel="icon" href="/favicon,ico" />
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
    </div>
  );
}


export async function getServerSideProps() {
  const { db } = await connectToDatabase()

  const data = await db.collection("animes").find({}).limit(5).toArray();

  const properties = JSON.parse(JSON.stringify(data));
  
  return {
    props: { properties: properties },
  }
}