import React, { useCallback } from "react";

import { useNavigate } from "react-router-dom";

import styles from "./StationListItem.module.scss";

interface StationListeItemProps {
  id: string;
  nameEn: string;
  nameCh: string;
}

function StationListItem(props: StationListeItemProps) {
  const { id, nameEn, nameCh } = props;
  const navigate = useNavigate();
  const handleClick = useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigate(`/result/${id}`);
  }, [navigate, id]);

  return (
    <div className={styles.row}>
      <span className={styles.name}>{`${nameEn} ${nameCh}`}</span>
      <span className={styles.space} />
      <a className={styles.button} href={`/#/result/${id}`} onClick={handleClick}>Go</a>
    </div>
  );
}

export default StationListItem;
