import { Grid, Typography } from "@mui/material";
import React from "react";

import styles from "./Group.module.scss";
import { GroupProps } from "./types";

export const Group = ({ children, component }: GroupProps) => {
  const { direction, name } = component;

  return (
    <div className={styles.groupWrapper}>
      <Grid style={{
        border: "1px solid rgba(0,0,0,0.26)",
        borderRadius: "10px",
        minWidth: "0px",

      }} className={styles.group} direction={direction || "column"}>
        {name && <Typography variant="subtitle1">{name}</Typography>}
        {children}
      </Grid>
    </div>
  );
};
