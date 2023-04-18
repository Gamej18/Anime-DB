import { data } from "jquery";
import { useState, useEffect, useRef } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "react-bootstrap-icons";
import { FadeInAnimation } from './animation.js';
import connectToDatabase from '../../../lib/mongodb.js';
import { Collection } from "mongoose";

 function Slider({listofStrings}: any) {
    // const ref = useRef(null);
    // useEffect(() => {
    //     const animation = new FadeInAnimation(ref.current);
    //     animation.start(1000);
    //     return () => {
    //         animation.stop();;
    //     };
    // }, []);
    // var properties[] = getServerSideProps();
    // if (properties == null)
    // {
    //   console.log("bob");
    // }
 
    return (
      <div>
        <h1>hi</h1>
        {properties && properties.map((property: any) => (
            <div>
              jjj
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


//DOES NOT WORK IN FUNCTION OUTSIDE OF THE MAINPAGE?????????? 
//WHY DOES THAT HAPPEN FIGURE THIS OUT IN THE MORNING.