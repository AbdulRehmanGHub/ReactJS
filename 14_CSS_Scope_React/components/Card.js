import React from "react";
// import styles from "./Card.css";               // // before - apply on all
import styles from "./Card.module.css";            // // after

const Card = () => {
  // return <div className="card">Card</div>;       // // before - applying on all the pages/components.
  return <div className={styles.card}>Card</div>;   // // after - apply on only Card.
};

export default Card;
