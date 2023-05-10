import {
  BooleanProperty,
  DateProperty,
  DateTimeProperty, FileProperty,
  NumberProperty, RefProperty,
  StringProperty, TextareaProperty
} from "components/ComponentSettings/properties";

export enum ParameterType {
  TEXT = "TEXT",
  TEXTAREA = "TEXTAREA",
  SWITCH = "SWITCH",
  DATEPICKER = "DATEPICKER",
  LINK = "LINK",
  COMBOBOX = "COMBOBOX",
  SELECT = "SELECT",
  RADIOGROUP = "RADIOGROUP",
  NUMBER = "NUMBER",
  DATE = "DATE",
  BOOLEAN = "BOOLEAN",
  DATETIME = "DATETIME",
  REF = "REF",
  FILE= "FILE"
}

type ParameterBase = {
  id: EntityId;
  name: string;
};

export type NumberParameter = ParameterBase & {
  properties?: NumberProperty;
  type: ParameterType.NUMBER;
};

export type TextareaParameter = ParameterBase & {
  properties?: TextareaProperty;
  type: ParameterType.TEXTAREA;
};

export type StringParameter = ParameterBase & {
  properties?: StringProperty;
  type: ParameterType.TEXT;
};

export type DateParameter = ParameterBase & {
  properties?: DateProperty;
  type: ParameterType.DATE;
};

export type DateTimeParameter = ParameterBase & {
  properties?: DateTimeProperty;
  type: ParameterType.DATETIME;
};

export type BooleanParameter = ParameterBase & {
  properties?: BooleanProperty;
  type: ParameterType.BOOLEAN;
};

export type RefParameter = ParameterBase & {
  properties?: RefProperty;
  type: ParameterType.REF;
};

export type FileParameter = ParameterBase & {
  properties?: FileProperty;
  type: ParameterType.FILE
};

export type Parameter =
  | DateParameter
  | DateTimeParameter
  | StringParameter
  | NumberParameter
  | RefParameter
  | FileParameter
  | BooleanParameter
  | TextareaParameter

export type InputParameter = Omit<Parameter, "id">;
