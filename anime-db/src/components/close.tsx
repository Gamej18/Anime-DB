import $ from "jquery";
import { LayoutSidebar } from "react-bootstrap-icons";

export default function CloseButton () {   
    function handleclick() {
        if ($("#menu").hide())
        {
            $("#menu").show();
        }
    }
    return (
        <button onClick={handleclick}>
            <LayoutSidebar size="30" className="item-sidebar" />
        </button>
    );
}

