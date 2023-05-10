import { TextField } from "@mui/material";
import { DateTimeParameter } from "components/ComponentSettings/Models/parameterM/types";
import React from "react";

import styles from "../styles.module.scss";

type Props = {
  element: DateTimeParameter;
  name: string;
};

export const DateTimeInput = ({ element, name }: Props) => {
  const { properties } = element;

  const { hint, hidden, readonly } = properties || {};
  return (<div>{ readonly ?
    !hidden && <TextField
      type="datetime-local"
      label={name}
      value={new Date()}
      className={styles.input}
      color="secondary"
      disabled
    /> :
      !hidden && <TextField
        type="datetime-local"
        label={name}
        value={new Date()}
        className={styles.input}
        color="secondary"
      />
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
