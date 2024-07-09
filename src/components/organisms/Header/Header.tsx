import React from "react";
import styles from "./Header.module.css";
import Logo from "components:atoms/Logo";

const Header: React.FC = () => {
  return (
    <div>
      <header className={styles.header}>
        <Logo />
      </header>
    </div>
  );
};

export default Header;
