import { useState, useEffect } from "react";
import { ArrowLeftCircle } from "react-bootstrap-icons";

export default function Slider() {
    const [active, setActive] = useState(false);
    function rightclick() {

    }
    return (
        <button onClick={rightclick}>
            <ArrowLeftCircle/>
        </button>
    )
}