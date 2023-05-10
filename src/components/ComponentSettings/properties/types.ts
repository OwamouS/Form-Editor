type Properties = {
  minValue: string;
  maxValue: string;
  multiline: boolean;
  lineCount: number;
  dateFormat: string;
  isChecked: boolean;
  info: boolean;
  hidden: boolean;
  readonly : boolean;
  hint: string;
  mask: number;
  counter: boolean
  scale: number;
  view: string;
  multiple: boolean;
};

export type NumberProperty = Pick<Properties, "minValue" | "maxValue" | "readonly" | "hint" | "hidden" | "info" | "scale">;
export type StringProperty = Pick<Properties, "multiline" | "lineCount" | "readonly" | "hint" | "hidden" | "counter" | "mask" | "info">;
export type DateProperty = Pick<Properties, "dateFormat" | "readonly" | "hidden" | "info" | "hint" | "minValue" | "maxValue">;
export type DateTimeProperty = Pick<Properties, "dateFormat" | "readonly" | "hidden" | "info" | "hint" | "minValue" | "maxValue" >;
export type BooleanProperty = Pick<Properties, "isChecked" | "readonly" | "hidden" | "info" | "hint" | "view">;
export type RefProperty = Pick<Properties, "isChecked" | "readonly" | "hidden" | "info" | "hint" | "view">;
export type FileProperty = Pick<Properties, "isChecked" | "readonly" | "hidden" | "info" | "hint" | "multiple">;
export type TextareaProperty = Pick<Properties, "lineCount">;
export type Property = FileProperty | NumberProperty | StringProperty | DateProperty | DateTimeProperty | BooleanProperty | RefProperty;
