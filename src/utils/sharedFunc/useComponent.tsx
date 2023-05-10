import { useComponentModel } from "components/ComponentSettings/Models/componentM";
import { Component } from "components/ComponentSettings/Models/componentM/types";

export const useComponent = <T extends Component>(
  componentId?: EntityId
): T | undefined => {
  const components = useComponentModel((state) => state.components);

  return components.find((c) => c.id === componentId) as T;
};
