import React from "react";

import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Lighter</h1>
      <h2 className={styles.description}>A lightweight light rail utility</h2>
    </div>
  );
}

export default Header;
