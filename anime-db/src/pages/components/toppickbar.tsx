// import { data } from "jquery";
// import { useState, useEffect, useRef } from "react";
// import { ArrowLeftCircle, ArrowRightCircle } from "react-bootstrap-icons";
// import { FadeInAnimation } from './animation.js';
// import connectToDatabase from '../../../lib/mongodb';

// function Slider( {properties}:any ) {
//     // const ref = useRef(null);
//     // useEffect(() => {
//     //     const animation = new FadeInAnimation(ref.current);
//     //     animation.start(1000);
//     //     return () => {
//     //         animation.stop();;
//     //     };
//     // }, []);
//     return (
//         <>
//             <h1>Hi</h1>
//             {properties && properties.map((property: any) => (
//                 <div>
//                     {property.animetitle}
//                 </div>
//             ))}
//         </>
//     )
// }

// // export default function RightClickHandle() {
// //     const [active, setActive] = useState(false);
// //     return (
// //         <>
// //             <button onClick={() => setActive(!active)}>
// //                 <ArrowRightCircle/>
// //             </button>
// //             {active && <Slider />}
// //         </>
// //     )
// // }

// // export async function getServerSideProps() {
// //     try {
// //         const { client } = await connectToDatabase();
    
// //         const data = await client
// //         .collection("animes")
// //         .find({})
// //         .limit(5)
// //         .toArray();
  
// //         const properties = JSON.parse(JSON.stringify(data));
// //         console.log(properties);
// //         return {
// //             props: { properties:properties }
// //         };
// //     } catch (e) {
// //         console.error(e);
// //     }
// // }