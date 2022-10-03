//Librerías
import { Link } from "react-router-dom"
//Components
import '../CSS/header.css'

const Header = ()=> {
    return (
        <header className="containerHeader">
            <nav className="navLabel">
                <ul className="ulHeader">
                    {/* <li className="liElement">                                                                                                                                                   
                        <Link to= '/'>Home</Link>
                    </li> */}
                    <li className="liElement">
                        <Link to= "/list" className="link">Listado</Link>
                    </li>
                    {/* <li className="liElement">
                        <Link to= '/Contact'>Contact</Link>
                    </li> */}
                </ul>
            </nav>
        </header>
    )
}

export default Header