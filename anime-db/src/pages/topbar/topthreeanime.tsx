import $ from "jquery";
import Image from "next/image";
import  juju from "../../images/jjk.jpg";
import vinland from "../../images/vinlandsaga.png";
import eighty from "../../images/eighty-six.png";
import { useEffect, useState } from 'react';
import { ArrowLeftCircle, ArrowRightCircle } from "react-bootstrap-icons";


export default function TopMainComponent() {
    const [index, setIndex] = useState(0);
    // const img0 = require('../../images/Jujutsu-Kaisen-1.png');
    // const img1 = require('../../images/vinlandsaga.png');
    // const img2 = require('../../images/eighty-six.png');
    var imgList = [juju, vinland, eighty];

    function RightClick() {
        if(index < 2)
        {
            setIndex(index + 1);
        }
    }

    function LeftClick() {
        if (index > 0)
        {
            setIndex(index - 1);
        }
    }

    return (
        <>
            <button onClick={LeftClick}>
                <ArrowLeftCircle />
            </button>
            <Image
                className="topimage"
                src={imgList[index]}
                alt="jjk"
            />
            <button onClick={RightClick}>
                <ArrowRightCircle/>
            </button>
        </>
    )
}