import React from "react";
import { EditComponent } from "./functions/edit-component";

import styles from "./styles.module.scss";

const ComponentSettings = () => {
  return (
    <div className={styles.settings}>
      <EditComponent />
    </div>
  );
};

export default ComponentSettings;
