import { data } from "jquery";
import { useState, useEffect, useRef } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "react-bootstrap-icons";
import { FadeInAnimation } from './animation.js';
import connectToDatabase from '../../../lib/mongodb';

function Slider( {data}:any ) {
    // const ref = useRef(null);
    // useEffect(() => {
    //     const animation = new FadeInAnimation(ref.current);
    //     animation.start(1000);
    //     return () => {
    //         animation.stop();;
    //     };
    // }, []);
    return (
        <>
            <h1>Hi</h1>
            {data && data.map((date: any) => (
                <h2>{date.animetitle}</h2>
            ))}
        </>
    )
}

export default function RightClickHandle() {
    const [active, setActive] = useState(false);
    return (
        <>
            <button onClick={() => setActive(!active)}>
                <ArrowRightCircle/>
            </button>
            {active && <Slider/>}
        </>
    )
}

export async function getServerSideProps() {
    try {
        const { client } = await connectToDatabase();
    
        const data = await client
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