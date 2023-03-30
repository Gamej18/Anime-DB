import { Search } from "react-bootstrap-icons";
import CloseButton from "./close";
import OpenButton from "./open";
import { LayoutSidebar } from "react-bootstrap-icons";
import { X } from "react-bootstrap-icons";

export default function MenuBar() {
    return (
        <div className="main">
             <CloseButton inactiveIcon={<X color="black"/>} activeIcon={<LayoutSidebar size="30" color="black"/>}/>
            <div className="menu" id="menu">
                <Search size={20} className="item-search" />
                <ul className="item-list">
                    <li className="item-genre">Genre</li>
                    <li className="item-season">Seasons</li>
                    <li className="item-searchs">Search</li>
                    <li className="item-reccomend">Recommendations</li>
                </ul>
                {/* <a href = "mailto: jalenbowenswork@gmail.com">Contact Me</a> */}
            </div>
        </div>
    )
}
