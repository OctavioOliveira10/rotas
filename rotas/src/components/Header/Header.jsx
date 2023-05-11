import {Link} from "react-router-dom"
import "./index.css"

function Header() {
    return(
        <ul>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/">Home</Link></li>
        </ul>
    )
}

export default Header;