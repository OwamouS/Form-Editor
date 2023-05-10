import { SchemaTree } from "components/Configuration/appConfigurationM/types";
import { Component, ComponentGroup } from "components/ComponentSettings/Models/componentM/types";
import { ReactNode } from "react";

export type ComponentProps = {
  children: ReactNode[];
  component: Component;
  subTree: SchemaTree;
};

export type GroupProps = ComponentProps & {
  component: ComponentGroup;
};
