import './Navbar.scss'
import { Icon } from "@iconify/react";
import Logo from "@/assets/images/logo.png";
const Navbar = () => {
    return <nav className="menu">
    <div className="menu__container">
      <a className="menu__brand" href="#">
        <img className='menu__logo' src={Logo} title='logo' alt="logo" />
      </a>
      <button className="menu__toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="menu__toggler-icon"></span>
      </button>
      <div className="menu__collapse" id="navbarNav">
        <ul className="menu__nav">
          <li className="menu__item">
            <a className="menu__link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#services">Services</a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">Testimonials</a>
          </li>
          
          <li className="menu__item">
            <a className="menu__link" href="#faq">faq</a>
          </li>
          
          <li className="menu__item">
            <a className="menu__link" href="#">portfolio</a>
          </li>
          
          <li className="menu__item">
            <a className="menu__link" href="#">contact</a>
          </li>
        </ul>
        <button type="button" className="menu__btn">
            <span>+989198881400</span>
            <Icon icon='tabler:info-circle' width={24} />
        </button>
      </div>
    </div>
  </nav>
}

export default Navbar