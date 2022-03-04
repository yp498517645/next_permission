import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "./Square.module.scss";
const SquareEnvelope = React.forwardRef(() => {
  return <FontAwesomeIcon icon={faSquareEnvelope} className={styles["font"]} />;
});
export default SquareEnvelope;