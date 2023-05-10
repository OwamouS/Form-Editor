import React from "react";
import { FileParameter } from "../../../Models/parameterM/types";
import {
  Button,
} from "@mui/material";

type Props = {
  element: FileParameter;
  name: string;
};

export const FileInput = ({ element, name }: Props) => {
  const { properties } = element;
  const { hint, hidden, readonly } = properties || {};

  return (
    <div>
      <div style={{ fontSize: 12, color: '#a4a4a4', marginLeft: 3, marginBottom: 3 }}>{name}</div>
      {readonly ?
        !hidden && <Button variant="contained" component="label" disabled>
        Загрузить файл
        <input type="file" hidden />
      </Button> :
        !hidden && <Button variant="contained" component="label">
          Загрузить файл
          <input type="file" hidden />
        </Button>
      }
      <div
        style={{
          fontSize: 12,
          marginTop: 5,
          marginLeft: 5,
          color: '#9b9b9b',
        }}
      >
        {hint}
      </div>
    </div>
  );
};
