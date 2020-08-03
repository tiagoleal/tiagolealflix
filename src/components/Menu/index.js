import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/Logo.png";
import "./Menu.css";

import Button from "../Button";

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={Logo} className="Logo" alt="tiagoflix" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo video
      </Button>
    </nav>
  );
}

export default Menu;
