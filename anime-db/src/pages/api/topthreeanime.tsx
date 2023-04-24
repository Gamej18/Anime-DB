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
                src={juju}
                alt="Jujutsu Kaisen"
            />
        </div>
    )
}

export const VinlandImage = () => {
    return (
        <div>
            <Image
                className="vin-image"
                id="vin"
                src={vinland}
                alt="Vinland Saga"
            />
        </div>
    )
}


export default function RightClick() {
    function clickedMe() {
            useEffect(() =>{
                var element = document.getElementById("vin");
                element.style.zIndex = "1";
            })
    }
    return (
        <button onClick={clickedMe}>
            <ArrowRightCircle/>
        </button>
    )
}