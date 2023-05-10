import React from "react";

import { TextField } from "@mui/material";

import styles from "../styles.module.scss";
import { NumberParameter } from "../../../Models/parameterM/types";

type Props = {
  element: NumberParameter;
  name: string;
};

export const NumberInput = ({ element, name }: Props) => {
  const { maxValue, minValue, hint, hidden, readonly } = element.properties || {};

  return (
    <div>{ readonly ?
      !hidden && <TextField label={name} type="number" className={styles.input} disabled/> :
      !hidden && <TextField label={name} type="number" className={styles.input} />
    }
      <div
        style={{
          fontSize: 12,
          marginTop: 5,
          marginLeft: 5,
          color: 'rgba(0,0,0,0.26)',
        }}
      >{hint}</div>
    </div>
  );
};
