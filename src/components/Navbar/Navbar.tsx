import './Navbar.scss'
import { Icon } from "@iconify/react";
import Logo from "@/assets/images/logo.png";
const Navbar = () => {
    return <nav className="menu">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img className='rounded' src={Logo} title='logo' alt="logo" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Testimonials</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" href="#faq">faq</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" href="#">portfolio</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" href="#">contact</a>
          </li>
        </ul>
        <button type="button" className="rounded-pill btn-amir d-flex align-items-center gap-2">
            <span>+989198881400</span>
            <Icon icon='tabler:info-circle' width={24} />
        </button>
      </div>
    </div>
  </nav>
}

export default Navbar