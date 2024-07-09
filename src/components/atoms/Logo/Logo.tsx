import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import logoImage from "assets:images/Logo.svg";

const Logo: React.FC = () => {
  return (
    <Link to="/" className={styles.logo}>
      <img src={logoImage} alt="Logo do site" />
      <span className={styles.logoText}>PRECIN</span>
    </Link>
  );
};

export default Logo;
