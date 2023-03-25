import Head from 'next/head';
import { connectToDatabase } from "../../lib/mongodb";
import MenuBar from '@/components/menubar';


export default function HomePage({properties}: {properties: any}) {
  
  console.log(properties)
  return (
    <div>
      {/* <div>
        {properties && properties.map((property: any) => (
            <div>
              {property.animetitle}
            </div>
          )
        )}
      </div> */}
      <MenuBar />
      <Head>
        <title>Creat Next App</title>
        <link rel="icon" href="/favicon,ico" />
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
      </Head>
    </div>
  );
}


export async function getServerSideProps() {
  const { db } = await connectToDatabase()

  const data = await db.collection("animes").find({}).limit(5).toArray();

  const properties = JSON.parse(JSON.stringify(data));

  const filtered = properties.map((property: { _id: any; animetitle: any; }) => {
    return {
      _id: property._id,
      animetitle: property.animetitle
    }
  })
  
  return {
    props: { properties: filtered },
  }
}