import React, { useEffect } from "react";

import { FileProperty } from "components/ComponentSettings/properties";
import { useFormFields } from "utils/sharedFunc/useFormFields";
import { TextInput } from "utils/mui/TextInput";
import { Checkbox } from "utils/mui/Checkbox";
import { ParameterPropertyProps } from "../types";
import styles from "./styles.module.scss";
type Props = ParameterPropertyProps<FileProperty>;

export const FilePropertyFields = ({ properties, onChange }: Props) => {
  const [fields, updateField] = useFormFields<FileProperty>(properties || {});

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
      <Checkbox
        checked={fields?.multiple}
        name="Выбирать несколько"
        onChange={(e) => updateField("multiple", e.target.checked)}
      />
    </div>
  );
};
