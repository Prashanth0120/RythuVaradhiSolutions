import "./Navbar.css"

function Navbar(){
  return(
    <header className="header">
    <h1 style={{fontSize:"35px"}}>RythuVaaradhi</h1>
    <nav className="Navbar">
        <ul className="Nav-List">
            <li><a href="#home" style={{textDecoration:"none"}}>Home</a></li>
            
            <li><a href="#about" style={{textDecoration:"none"}}>About</a></li>
            <li><a href="#services" style={{textDecoration:"none"}}>Services</a></li>
            <li><a href="#contact" style={{textDecoration:"none"}}>Careers</a></li>

            <li><a href="#contact" style={{textDecoration:"none"}}>Contact</a></li>
        </ul>
    </nav>
</header>
  )
}

export default Navbar