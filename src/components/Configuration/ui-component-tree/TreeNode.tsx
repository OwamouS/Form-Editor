import React, { ReactNode } from "react";

import { SchemaTree } from "components/Configuration/appConfigurationM/types";
import { DatasourceComponent } from "components/ComponentSettings/componentDatasource";

import { Form, Group, Page, Tabs } from "./components";
import { useComponent } from "utils/sharedFunc/useComponent";
import { checkDnD } from "utils/dnd";
import { drag, withDraggingProps } from "utils/dnd/Drag";
import DropTreeItemArea from "./DropArea";
import { useComponentModel } from "components/ComponentSettings/Models/componentM";
import { OnDropFn } from "utils/dnd/drag-and-drop/types";
import { useAppConfigurationModel } from "components/Configuration/appConfigurationM";
import { DatasourceComponent as DatasourceComponentType } from "components/ComponentSettings/Models/componentM/types";

type Props = {
  item: SchemaTree;
  children: ReactNode[];
} & withDraggingProps;

function TreeNode({ item, children }: Props) {
  const { swapComponents, insertComponent } = useAppConfigurationModel();
  const { duplicateComponent } = useComponentModel();
  const component = useComponent(item.id);

  if (!component) {
    throw new Error(`Компонента с id ${item.id} не существует`);
  }

  if (component.code !== "element") {
    const Wrapper = getComponentWrapper(component.code);
    return (
      <Wrapper component={component} subTree={item}>
        {children}
      </Wrapper>
    );
  }

  const handleDrop: OnDropFn<SchemaTree> = (droppedItem) => {
    if (droppedItem.alias === "app-form") {
      swapComponents(droppedItem.item.id, item.id);
      return;
    }

    const neighborId = droppedItem.item.id;

    const shouldDuplicate = true;
    const componentId = shouldDuplicate
      ? duplicateComponent(neighborId)?.id
      : droppedItem.item.id;

    if (!componentId) {
      return;
    }

    insertComponent(componentId, item.id);
  };

  return (
    <>
      <DropTreeItemArea item={item} onDrop={handleDrop} />
      <DatasourceComponent {...(component as DatasourceComponentType)} />
    </>
  );
}

function getComponentWrapper(code: ComponentCode) {
  switch (code) {
    case "form":
      return Form;
    case "tabs":
      return Tabs;
    case "page":
      return Page;
    case "group":
    default:
      return Group;
  }
}

export default checkDnD(drag(TreeNode, "app-form"));
