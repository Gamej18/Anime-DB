import Head from 'next/head';
import MenuBar from '@/pages/components/menubar';
import RightClickHandle from '@/pages/components/toppickbar';
import connectToDatabase from '../../lib/mongodb';

export default function HomePage({properties}: any) {
  return (
    <div>
      <div>
        {properties && properties.map((property: any) => (
            <div>
              {property.animetitle}
            </div>
          )
        )}
      </div>
      {/* <RightClickHandle /> */}
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
      const { client } = await connectToDatabase();
  
      const data = await client
      .collection("animes")
      .find({})
      .limit(5)
      .toArray();

      const properties = JSON.parse(JSON.stringify(data));
      console.log(properties);
      return {
          props: { properties:properties }
      };
}