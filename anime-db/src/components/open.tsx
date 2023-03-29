import $ from "jquery";
import { LayoutSidebar } from "react-bootstrap-icons";

export default function OpenButton () {   
    function handleclick() {
        let menustyle = document.body.style;
        if ($("#menu").show())
        {
            $("#menu").hide();
        }
        else if ($("#menu").hide())
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