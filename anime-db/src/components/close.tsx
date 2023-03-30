import $ from "jquery";
import { useState } from "react";
import { LayoutSidebar } from "react-bootstrap-icons";

export default function CloseButton (inactiveIcon: any, activeIcon: any) {
    const [icon, setIcon] = useState(false);
    function handleclick() {
        // if ($("#menu").hide())
        // {
        //     $("#menu").show();
        // }
        {icon ? activeIcon: inactiveIcon}
        $("#menu").animate({width:'toggle'},200);
    }
    return (
        <button onClick={() => setIcon(!icon)}>
            handleclick();
         
        </button>
    );
}

//FIX THIS OMGGGGGG