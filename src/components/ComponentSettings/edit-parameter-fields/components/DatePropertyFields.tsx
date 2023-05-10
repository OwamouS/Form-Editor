import React, { useEffect } from "react";

import { DateProperty } from "components/ComponentSettings/properties";

import { useFormFields } from "utils/sharedFunc/useFormFields";
import { TextInput } from "utils/mui/TextInput";

import { ParameterPropertyProps } from "../types";

import styles from "./styles.module.scss";
import { Checkbox } from "../../../../utils/mui/Checkbox";
import { TextField } from "@mui/material";

type Props = ParameterPropertyProps<DateProperty>;

export const DatePropertyFields = ({ properties, onChange }: Props) => {
  const [fields, updateField] = useFormFields<DateProperty>(properties || {});

  useEffect(() => {
    onChange(fields);
  }, [fields]);

  return (
    <div className={styles.fieldsWrapper}>
      {/*<TextInput*/}
      {/*  label="Формат даты"*/}
      {/*  value={fields?.dateFormat}*/}
      {/*  type="text"*/}
      {/*  onChange={(v) => updateField("dateFormat", v)}*/}
      {/*/>*/}
      <Checkbox
        checked={fields?.info}
        name="Информационное поле"
        onChange={(e) => updateField("info", e.target.checked)}
      />
      <Checkbox
        checked={fields?.readonly}
        name="Только чтение"
        onChange={(e) => updateField("readonly", e.target.checked)}
      />
      <Checkbox
        checked={fields?.hidden}
        name="Скрытый"
        onChange={(e) => updateField("hidden", e.target.checked)}
      />
      <TextField
        value={fields?.minValue}
        label="Минимальное значение"
        type="date"
        onChange={(v) => updateField("minValue", +v)}
      />
      <TextField
        value={fields?.maxValue}
        label="Максимальное значение"
        type="date"
        onChange={(v) => updateField("maxValue", +v)}
      />
    </div>
  );
};
