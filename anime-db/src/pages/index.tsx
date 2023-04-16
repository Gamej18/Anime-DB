import Head from 'next/head';
import MenuBar from '@/pages/components/menubar';
import Slider from '@/pages/components/toppickbar';
import connectToDatabase from '../../lib/mongodb';

export default function HomePage() {
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
      <Slider />
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
  try {
      
      const client:any = await connectToDatabase;
      const db = client.db("AnimeDB");

      const data = await db
      .collection("animes")
      .find({})
      .limit(5)
      .toArray();

      return {
          props: { data: JSON.parse(JSON.stringify(data)) }
      };

  } catch (e) {
      console.error(e);
  }
}