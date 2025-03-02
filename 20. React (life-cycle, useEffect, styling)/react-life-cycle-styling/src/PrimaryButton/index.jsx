import React from "react";
import styles from "./index.module.scss";
import clsx from "clsx";

const PrimaryButton = () => {
  return (
    <button className={clsx(styles.btn, styles["primary-btn"])}>
      primary button
    </button>
  );
};

export default PrimaryButton;
