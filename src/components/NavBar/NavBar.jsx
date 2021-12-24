import React from "react";
import classes from "./styles.module.css";
import { ReactComponent as IconCart } from "../../assets/svg/icon-cart.svg";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <div>
        <Logo />
      </div>
      <div>
        <ul className={classes.nav_links}>
          <li>
            <a href="#.com">Home</a>
          </li>
          <li>
            <a href="#.com">Headphones</a>
          </li>
          <li>
            <a href="#.com">Speakers</a>
          </li>
          <li>
            <a href="#.com">Earphones</a>
          </li>
        </ul>
      </div>
      <div>
        <button className={classes.cart_button}>
            <IconCart />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
