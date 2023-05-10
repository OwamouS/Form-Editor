import React, { useEffect } from "react";

import { StringProperty } from "components/ComponentSettings/properties";
import { useFormFields } from "utils/sharedFunc/useFormFields";
import { TextInput } from "utils/mui/TextInput";

import { ParameterPropertyProps } from "../types";

import styles from "./styles.module.scss";

type Props = ParameterPropertyProps<StringProperty>;

export const TextareaPropertyFields = ({ properties, onChange }: Props) => {
  const [fields, updateField] = useFormFields<StringProperty>(properties || {});

  useEffect(() => {
    onChange(fields);
  }, [fields]);

  return (
    <div className={styles.fieldsWrapper}>
      <TextInput
        label="Количество строк"
        value={fields?.lineCount}
        onChange={(v) => updateField("lineCount", v)}
        disabled={!fields.multiline}
        type="number"
      />
    </div>
  );
};
