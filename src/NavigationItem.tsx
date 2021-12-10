import React, { useCallback } from "react";

import { useNavigate } from "react-router-dom";

import styles from "./NavigationItem.module.scss";

interface NavigationItemProps {
  name: string;
  path: string;
}

function NavigationItem(props: NavigationItemProps) {
  const {
    name,
    path,
  } = props;
  const navigate = useNavigate();
  const handleClick = useCallback((event) => {
    event.preventDefault();
    navigate(path);
  }, [navigate, path]);

  return (
    <a className={styles.item} href={path} onClick={handleClick}>{name}</a>
  );
}

export default NavigationItem;
