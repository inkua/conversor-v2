import { Link, useLocation } from "wouter";
import { useEffect } from "react";

import "./Navbar.css";
import logo from "../../assets/nav/logo-white.svg";

export const Navbar = () => {
  const [location] = useLocation();

  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault();
      document.querySelector('.circle').classList.toggle('open');
    };

    const menuButton = document.querySelector('.menu-button');
    menuButton.addEventListener('click', handleClick);

    return () => {
      menuButton.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <header className="header">
      <nav className="navbar">
        <Link
          to="/"
          className={`nav-link ${location === "/" ? "active" : ""}`}
        >
          Convertor Horario
        </Link>

        <nav className="circular-menu">
          <img
            src={logo}
            alt="Logo Web"
            width={75}
            height={75}
            id="logotipo"
            className="menu-button logo"
          />
          <div className="circle">
            <a href="#" className="fa fa-pinterest fa-2x">  </a>
            <a href="#" className="fa fa-asterisk fa-2x"></a>
          </div>
        </nav>

        <Link
          to="/invitacion"
          className={`nav-link ${location === "/invitacion" ? "active" : ""}`}
        >
          Generar Invitación
        </Link>
      </nav>
    </header>
  );
};
