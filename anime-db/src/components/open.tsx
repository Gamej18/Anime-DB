import $ from "jquery";
import { LayoutSidebar } from "react-bootstrap-icons";

export default function OpenButton () {   
    function handleclick() {
        if ($("#menu").show())
        {
            $("#menu").hide();
        }

    }
    return (
        <button onClick={handleclick}>
            <LayoutSidebar size="30" className="item-sidebar" />
        </button>
    );
}
