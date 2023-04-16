import { data } from "jquery";
import { useState, useEffect, Children } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "react-bootstrap-icons";
// import connectToDatabase from '../../../lib/mongodb';

export default function Slider( {data}:any ) {
    // let i = 0;
    // const [active, setActive] = useState(data);
    function handleRightClick() {
        // Fix this
        
    }
    return (
        <>
            {data && data.map((datas:any) => (
                <h2>{datas.animetitle}</h2>
            ))}
            <button onClick={handleRightClick}>
                <ArrowRightCircle/>
            </button>
      
        </>
    )
}

// export async function getServerSideProps() {
//     try {
        
//         const client:any = await connectToDatabase;
//         const db = client.db("AnimeDB");
  
//         const data = await db
//         .collection("animes")
//         .find({})
//         .limit(5)
//         .toArray();
  
//         return {
//             props: { data: JSON.parse(JSON.stringify(data)) }
//         };
  
//     } catch (e) {
//         console.error(e);
//     }
// }