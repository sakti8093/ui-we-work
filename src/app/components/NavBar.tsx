import React from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import search from "../assets/search.svg";
import bag from "../assets/bag.svg";
import notification from "../assets/notification.svg";
import help from "../assets/help.svg";
import logo from "../assets/logo.svg";
import rightarrow from "../assets/rightarrow.svg";
import hamburger from "../assets/hamburger.svg";

interface NavBarProps {
  handleShow: () => void;
}

const NavBar:React.FC<NavBarProps> = ({ handleShow }) => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <div>
          <div></div>
        </div>
        <Image src={rightarrow} alt="rightarrow" />
      </div>
      <div className={styles.rightnavlist}>
        <div>
          <Image src={search} alt="search" />
        </div>
        <div>
          {" "}
          <Image src={bag} alt="bag" />
        </div>
        <div className={styles.notification}>
          <Image src={notification} alt="notification" />
          <div className={styles.notification_number}>
            <p>25</p>
          </div>
        </div>
        <div>
          <Image src={help} alt="help" />
        </div>
        <div>
          {" "}
          <Image src={logo} alt="logo" />
        </div>
      </div>
      <div className={styles.hamenu}>
        <Image onClick={handleShow} src={hamburger} alt="hamburger" />
      </div>
    </div>
  );
};
export default NavBar;
