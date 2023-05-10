import React, { useEffect } from "react";

import { NumberProperty } from "components/ComponentSettings/properties";
import { TextInput } from "utils/mui/TextInput";
import { useFormFields } from "utils/sharedFunc/useFormFields";

import { ParameterPropertyProps } from "../types";

import styles from "./styles.module.scss";
import { Checkbox } from "../../../../utils/mui/Checkbox";

type Props = ParameterPropertyProps<NumberProperty>;

export const NumberPropertyFields = ({ properties, onChange }: Props) => {
  const [fields, updateField] = useFormFields<NumberProperty>(properties || {});

  useEffect(() => {
    onChange(fields);
  }, [fields]);

  return (
    <div className={styles.fieldsWrapper}>
      <TextInput
        value={fields?.minValue}
        label="Минимальное значение"
        type="number"
        onChange={(v) => updateField("minValue", +v)}
      />
      <TextInput
        value={fields?.maxValue}
        label="Максимальное значение"
        type="number"
        onChange={(v) => updateField("maxValue", +v)}
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
        label="Точность"
        value={fields?.scale}
        onChange={(v) => updateField("scale", v)}
        type="number"
      />
    </div>
  );
};
