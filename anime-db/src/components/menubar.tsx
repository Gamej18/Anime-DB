import { Search } from "react-bootstrap-icons";
import OpenButton from "./open";
import CloseButton from "./close";

export default function MenuBar() {
    return (
        <div className="main">
          
            <CloseButton />
            <div className="menu" id="menu">
            <OpenButton />
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
