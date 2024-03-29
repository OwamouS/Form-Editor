import { Parameter } from "components/ComponentSettings/Models/parameterM/types";

export type ComponentBase = {
  id: EntityId;
  code: ComponentCode;
  name: ComponentName;
  description?: ComponentDescription;
};

export type GroupDirection = "row" | "column";

export type ComponentForm = ComponentBase & {
  code: "form";
};

export type ComponentTabs = ComponentBase & {
  code: "tabs";
};

export type ComponentPage = ComponentBase & {
  code: "page";
};

export type ComponentGroup = ComponentBase & {
  code: "group";
  direction: GroupDirection;
};

export type ComponentElement = ComponentBase & {
  code: "element";
  dataSource: Parameter;
};

export type DatasourceComponent = ComponentElement;

export type Component =
  | ComponentForm
  | ComponentTabs
  | ComponentPage
  | ComponentGroup
  | DatasourceComponent;
