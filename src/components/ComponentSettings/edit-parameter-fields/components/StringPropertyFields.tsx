import React, { useEffect } from "react";

import { StringProperty } from "components/ComponentSettings/properties";
import { useFormFields } from "utils/sharedFunc/useFormFields";
import { TextInput } from "utils/mui/TextInput";
import { Checkbox } from "utils/mui/Checkbox";

import { ParameterPropertyProps } from "../types";

import styles from "./styles.module.scss";

type Props = ParameterPropertyProps<StringProperty>;

export const StringPropertyFields = ({ properties, onChange }: Props) => {
  const [fields, updateField] = useFormFields<StringProperty>(properties || {});

  useEffect(() => {
    onChange(fields);
  }, [fields]);

  return (
    <div className={styles.fieldsWrapper}>
      <Checkbox
        checked={fields?.multiline}
        name="Многострочный"
        onChange={(e) => updateField("multiline", e.target.checked)}
      />
      <TextInput
        label="Количество строк"
        value={fields?.lineCount}
        onChange={(v) => updateField("lineCount", v)}
        disabled={!fields.multiline}
        type="number"
      />
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
      <TextInput
        label="Маска ввода"
        value={fields?.mask}
        onChange={(v) => updateField("mask", v)}
        type="number"
      />
    </div>
  );
};
