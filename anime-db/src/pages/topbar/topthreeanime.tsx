import $ from "jquery";
import Image from "next/image";
import  juju from "../../images/Jujutsu-Kaisen-1.png";
import vinland from "../../images/vinlandsaga.png";
import eighty from "../../images/eighty-six.png";
import { useEffect, useState } from 'react';
import { ArrowLeftCircle, ArrowRightCircle } from "react-bootstrap-icons";


export default function TopMainComponent() {
    const [index, setIndex] = useState(0);
    var imgList = [juju, vinland, eighty];

    function RightClick() {
        setIndex(index + 1);
    }

    function LeftClick() {
        setIndex(index - 1);
    }

    return (
        <>
            <img src={imgList[index]} />
            <button onClick={RightClick}>
                <ArrowRightCircle/>
            </button>
        </>
    )
}