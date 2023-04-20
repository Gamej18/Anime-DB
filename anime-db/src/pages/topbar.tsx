// import { GetServerSideProps } from "next";
import { useState, useEffect, useRef } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "react-bootstrap-icons";
import connectToDatabase from '../../lib/mongodb.js';

//  export default function Slider({properties}: any) {
//     return (
//       <div>
//         <h1>hi</h1>
//         {properties && properties.map((property: any) => (
//             <div>
//               {property.animetitle}
//             </div>
//           )
//         )}
//       </div>
//     )
// }

export default function RightClickHandle({properties}: any) {
    const [active, setActive] = useState(false);
    return (
        <>
            <button onClick={() => setActive(!active)}>
                <ArrowRightCircle/>
            </button>
            {active && properties && properties.map((property: any) => (
            <div>
              {property.animetitle}
            </div>
          )
        )}
        </>
    )
}


export async function getServerSideProps() {
  
  
  const { db } = await connectToDatabase()

  const data = await db.collection("animes").find({}).limit(5).toArray();

  const properties = JSON.parse(JSON.stringify(data));

  return {
      props: { properties:properties }
  };
}

//DOES NOT WORK IN FUNCTION OUTSIDE OF THE MAINPAGE?????????? 
//WHY DOES THAT HAPPEN FIGURE THIS OUT IN THE MORNING.