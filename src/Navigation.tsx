import React from "react";

import NavigationItem from "./NavigationItem";

import styles from "./Navigation.module.scss";

function Navigation() {
  return (
    <div className={styles.navigation}>
      <NavigationItem name="Map" path="/" />
      <NavigationItem name="Station List" path="/list" />
      <NavigationItem name="Attribution" path="/attribution" />
    </div>
  )
}

export default Navigation;
