//Componentes
import '../CSS/footer.css'

const Footer = ()=> {
    return(
        <footer className='footerLabel'>
            <nav className='navLabel'>
                <ul className='ulLabel'>
                    <li className='liLabel'>
                        <span>© 2022 Alvarez Nicolás Martín. All rights reserved.</span>
                    </li>
                    <li className='liLabel'>
                        <a href="https://www.instagram.com/nico.m.a/" rel="noopener norefer">Instagram</a>
                    </li>
                    <li className='liLabel'>
                        <a href="https://www.linkedin.com/in/nicolasalvarez85/" rel="noopener norefer">Linkedin</a>
                    </li>
                </ul>
            </nav>
        </footer>
 
    )
}

export default Footer