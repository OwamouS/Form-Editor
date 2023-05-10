import { Checkbox as UICheckbox } from "utils/mui/Checkbox";
import React from "react";
import styles from "../styles.module.scss";
import { BooleanParameter } from "../../../Models/parameterM/types";
import {
  FormControlLabel,
  Switch,
} from "@mui/material";

type Props = {
  element: BooleanParameter;
  name: string;
};

export const Checkbox = ({ element, name }: Props) => {
  const { properties } = element;
  const { isChecked, hint, hidden, readonly } = properties || {};

  switch(properties?.view) {
    case "CHECKBOX":
      return (<div>{ readonly ?
        !hidden && <UICheckbox checked={isChecked} name={name} className={styles.input} disabled/> :
          !hidden && <UICheckbox checked={isChecked} name={name} className={styles.input} />
      }
          <div
            style={{
              fontWeight: "none",
              fontSize: 12,
              marginTop: 5,
              marginLeft: 5,
              color: 'rgba(0,0,0,0.26)',
            }}
          >{hint}</div>
        </div>
      )
    case "SWITCH":
    default:
      return (<div>{ readonly ?
        !hidden && <FormControlLabel
        value="start"
        style={{ width: '100%', marginLeft: 5 }}
        control={<Switch color="primary" value={true} />}
        label={name}
        labelPlacement="end"
        disabled
      /> :
          !hidden && <FormControlLabel
            value="start"
            style={{ width: '100%', marginLeft: 5 }}
            control={<Switch color="primary" value={true} />}
            label={name}
            labelPlacement="end"
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
  }
};
