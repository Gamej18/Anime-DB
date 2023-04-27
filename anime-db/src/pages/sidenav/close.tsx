import $ from "jquery";
import { useState } from "react";
import { LayoutSidebar } from "react-bootstrap-icons";
import { X } from "react-bootstrap-icons";

export default function CloseButton () {
    const [icon, setIcon] = useState(true);
    function handleclick() {
        setIcon(!icon);
        $("#menu").animate({width:'toggle'},200);
    }
    return (
        <button onClick={handleclick}>    
          {icon ? <X size="30" color="black"/>: <LayoutSidebar className="layoutsidebar" size="30" color="black"/>}    
        </button>
    );
}