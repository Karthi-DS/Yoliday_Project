import React from 'react'
import styles from "./miniCard.module.css"

const MiniCard = ({data}) => {
  return (
    <div className={styles.miniCard}>
      <h2>{data}</h2>
    </div>
  )
}

export default MiniCard;
