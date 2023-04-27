import $ from "jquery";
import  juju from "../../images/Jujutsu-Kaisen-1.png";
import vinland from "../../images/vinlandsaga.png";
import eighty from "../../images/eighty-six.png";
import { useEffect, useRef } from 'react';
import { ArrowLeftCircle, ArrowRightCircle } from "react-bootstrap-icons";
import Image from 'next/image';

interface Anime {
    title: string;
}


export let jjk: Anime = {
    title: "Jujutsu Kaisen",
}

export const JujuImage = () => {
    return (
        <div>
            <Image
                className="juju-image"
                id="ju"
                src={juju}
                alt="Jujutsu Kaisen"
            />
        </div>
    )
}

// export const VinlandImage = (props: any) => {
//     return (
//         <div >
//             <Image
//                 className="vin-image"
//                 style={{color:props}}
//                 id="vin"
//                 src={vinland}
//                 alt="Vinland Saga"
//             />
            
//         </div>
//     )
// }


export default function RightClick() {
    const inputElement:any = useRef();

    const RightInput = () => {
        inputElement.current.style.zIndex = "-1";
    }

    const LeftInput = () => {
        inputElement.current.style.zIndex = "1";
    }
        // requires a document??????????????????????????????????
    return (
        <div>
            {/* <h1 ref={inputElement}>changed</h1> */}
            <Image
                className="vin-image"
                ref={inputElement}
                id="vin"
                src={vinland}
                alt="Vinland Saga"
            />
            <button onClick={LeftInput}>
                <ArrowLeftCircle/>
            </button>
            <button onClick={RightInput}>
                <ArrowRightCircle/>
            </button>
        </div>

    )
}