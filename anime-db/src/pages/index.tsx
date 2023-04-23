import Head from 'next/head';
import MenuBar from '@/pages/components/menubar';
import RightClickHandle from './components/topanime';
import connectToDatabase from '../../lib/mongodb';
import { ImportOutlined } from '@ant-design/icons';

export default function HomePage({ properties}: any) {
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
      <RightClickHandle />
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

  return {
      props: properties[0]
  };
}