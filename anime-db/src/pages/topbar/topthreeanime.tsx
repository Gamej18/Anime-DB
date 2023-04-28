import $ from "jquery";
import  juju from "../../images/Jujutsu-Kaisen-1.png";
import vinland from "../../images/vinlandsaga.png";
import eighty from "../../images/eighty-six.png";
import { useEffect, useState } from 'react';
import { ArrowLeftCircle, ArrowRightCircle } from "react-bootstrap-icons";
import Image from 'next/image';

export default function TopMainComponent() {
    const [index, setIndex] = useState(0);
    const img = new (Image as any)(1080, 1920);
    img[0].src = juju;
    img[1].src = vinland;
    img[2].src = eighty;

    function RightClick() {
        setIndex(index + 1);
    }

    function LeftClick() {
        setIndex(index - 1);
    }

    return (
        img[index];
        <button onClick={RightClick}>
            
        </button>
    )
}