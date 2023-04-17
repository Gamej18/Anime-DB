import { data } from "jquery";
import { useState, useEffect, useRef } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "react-bootstrap-icons";
import { FadeInAnimation } from './components/animation.js';
import connectToDatabase from '../../lib/mongodb.js';

function Slider( {properties}: any ) {
    // const ref = useRef(null);
    // useEffect(() => {
    //     const animation = new FadeInAnimation(ref.current);
    //     animation.start(1000);
    //     return () => {
    //         animation.stop();;
    //     };
    // }, []);
    return (
      <div>
        <h1>hi</h1>
        {properties && properties.map((property: any) => (
            <div>
              {property.animetitle}
            </div>
          )
        )}
      </div>
    )
}

export default function RightClickHandle() {
    const [active, setActive] = useState(false);
    return (
        <>
            <button onClick={() => setActive(!active)}>
                <ArrowRightCircle/>
            </button>
            {active && <Slider />}
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