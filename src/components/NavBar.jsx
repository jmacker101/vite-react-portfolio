import { FaGithub, FaLinkedin } from "react-icons/fa"
import Logo from "../assets/Logo.png"

const NavBar = () => {
  return (
    <nav className="flex intems-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
                <img src={Logo} className="-mx-0" width={85} height={100}
                alt="Logo" />
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/your-linkedin=profile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn">
                <FaLinkedin />
            </a>
            <a href="https://www.linkedin.com/in/your-github-profile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub">
                <FaGithub />
            </a>

        </div>
    </nav>
  )
}

export default NavBar