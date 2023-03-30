import $ from "jquery";
import { useState } from "react";
import { LayoutSidebar } from "react-bootstrap-icons";

export default function CloseButton ({inactiveIcon}: {inactiveIcon:any}, {activeIcon}: {activeIcon:any}) {
    const [icon, setIcon] = useState(false);
    function handleclick() {
        // if ($("#menu").hide())
        // {
        //     $("#menu").show();
        // }
        setIcon(!icon);
        {icon ? activeIcon: inactiveIcon}
        $("#menu").animate({width:'toggle'},200);
    }
    return (
        <button onClick={handleclick}>
            <LayoutSidebar size="30" color="black" className="item-sidebar" />
        </button>
    );
}

