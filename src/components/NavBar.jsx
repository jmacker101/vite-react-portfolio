import Logo.png from "../assets/Logo.png"
const NavBar = () => {
  return (
    <nav className="flex intems-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
                <img src={Logo.png} className=""/>
            </a>
        </div>
    </nav>
  )
}

export default NavBar