import { useState, useEffect } from "react";
import { ArrowLeftCircle } from "react-bootstrap-icons";
import connectToDatabase from '../../../lib/mongodb';

export default function Slider() {
    // let i = 0;
    // const [active, setActive] = useState(false);
    function handleRightClick(data: any) {
        // properties[i+1];
        console.log("fi");
        return(
            <div>
                <h2>{data.animetitle}</h2>
            </div>
        )
    }
    return (
        <button onClick={handleRightClick}>
            <ArrowLeftCircle/>
        </button>
    )
}

export async function getServerSideProps(context: any) {
    try {
        const { db } = await connectToDatabase();

        const data = await db.collection("animes")
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