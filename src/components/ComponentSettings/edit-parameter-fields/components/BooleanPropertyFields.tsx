import React, { useEffect } from "react";
import { BooleanProperty } from "components/ComponentSettings/properties";
import { useFormFields } from "utils/sharedFunc/useFormFields";
import { TextInput } from "utils/mui/TextInput";
import { ParameterPropertyProps } from "../types";
import styles from "./styles.module.scss";
import { Checkbox } from "../../../../utils/mui/Checkbox";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

type Props = ParameterPropertyProps<BooleanProperty>;

export const BooleanPropertyFields = ({ properties, onChange }: Props) => {
  const [fields, updateField] = useFormFields<BooleanProperty>(properties || {});


  useEffect(() => {
    onChange(fields);
  }, [fields]);

  return (
    <div className={styles.fieldsWrapper}>
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
      <TextInput
        label="Подсказка"
        value={fields?.hint}
        onChange={(v) => updateField("hint", v)}
        type="text"
      />
      <FormControl fullWidth>
        <InputLabel>Вариант отображения</InputLabel>
        <Select
          value={fields?.view}
          label="Вариант отображения"
          onChange={(v) => updateField("view", v.target.value)}
        >
          <MenuItem value={"CHECKBOX"}>CHECKBOX</MenuItem>
          <MenuItem value={"SWITCH"}>SWITCH</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
