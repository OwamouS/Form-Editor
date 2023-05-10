import React from "react";
import { EditorActions } from "components/CommandPanel/actions/CommandPanelActions";
import styles from "./styles.module.scss";

export const AppHeader = () => {
  return (
    <div className={styles.header}>
      <EditorActions />
    </div>
  );
};
