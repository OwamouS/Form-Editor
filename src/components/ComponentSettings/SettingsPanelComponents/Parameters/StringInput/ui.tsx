import React from "react";

import { TextField } from "@mui/material";
import { StringParameter } from "components/ComponentSettings/Models/parameterM/types";

import styles from "../styles.module.scss";

type Props = {
  element: StringParameter;
  name: string;
};

export const StringInput = ({ element, name }: Props) => {
  const { properties } = element;

  const { multiline, lineCount, hint, hidden, readonly } = properties || {};

  return (
    <div>{ readonly ?
      !hidden && <TextField
      className={styles.input}
      label={name}
      multiline={multiline}
      minRows={lineCount}
      disabled
    /> :
      !hidden && <TextField
        className={styles.input}
        label={name}
        multiline={multiline}
        minRows={lineCount}
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
