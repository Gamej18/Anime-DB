import { Search } from "react-bootstrap-icons"

export default function MenuBar() {
    return (
        <div className="Menu">
            <>
                <Search size={20} />
                <ul>
                    <li>Genre</li>
                    <li>Seasons</li>
                    <li>Search</li>
                    <li>Recommendations</li>
                </ul>
            </>
        </div>
    )
}
