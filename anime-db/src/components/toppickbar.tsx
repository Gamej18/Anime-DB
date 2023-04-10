import { useState, useEffect } from "react";
import { ArrowLeftCircle } from "react-bootstrap-icons";

export default function Slider() {
    // let i = 0;
    // const [active, setActive] = useState(false);
    function rightclick() {
        // properties[i+1];
        // console.log("fi");
    }
    return (
        <button onClick={rightclick}>
            <ArrowLeftCircle/>
        </button>
    )
}

// export async function getServerSideProps() {
//   const { db } = await connectToDatabase()

//   const data = await db.collection("animes").find({}).limit(5).toArray();

//   const properties = JSON.parse(JSON.stringify(data));

//   const filtered = properties.map((property: { _id: any; animetitle: any; }) => {
//     return {
//       _id: property._id,
//       animetitle: property.animetitle
//     }
//   })
  
//   return {
//     props: { properties: filtered },
//   }
// }