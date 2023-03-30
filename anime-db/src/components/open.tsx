import $ from "jquery";
import { LayoutSidebar } from "react-bootstrap-icons";
import { X } from "react-bootstrap-icons";

export default function OpenButton () {   
    function handleclick() {
        if ($("#menu").show())
        {
            $("#menu").hide();
        }

    }
    return (
        <button onClick={handleclick}>
                 <X size="30"/>
        </button>
    );
}

