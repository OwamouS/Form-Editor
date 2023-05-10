import React from "react";

import classNames from "classnames";

import { ALLOWED_TYPES_FOR_DND } from "interfaces/dnd";
import { drag, withDraggingProps } from "utils/dnd/Drag";

import styles from "./ElementItem.module.scss";
import { useComponent } from "utils/sharedFunc/useComponent";
import { SchemaTree } from "components/Configuration/appConfigurationM/types";
import { getComponentIcon_byCode } from "utils/sharedFunc/getComponentIcon_byCode";
import { getComponentIcon_byName } from "utils/sharedFunc/getComponentIcon_byName";
import { useComponentModel } from "components/ComponentSettings/Models/componentM";
import DeleteComponent from "components/ComponentSettings/functions/delete-component/ui";


type Props = {
  title: string;
  className?: string;
  item: SchemaTree;
} & withDraggingProps;

function ElementItem({ title, item, className, isDragging }: Props) {
  const component = useComponent(item.id);
  const { selectedComponent, selectComponent } = useComponentModel();

  if (!component) {
    return;
  }

  const withDragging = ALLOWED_TYPES_FOR_DND.includes(component?.code);
  const Icon = component.code == "element" ? getComponentIcon_byName(component.name) : getComponentIcon_byCode(component.code);

  const handleSelect = () => {
    selectComponent(component.id);
  };

  const isSelected = selectedComponent?.id === component.id;

  return (
    <div
      onClick={handleSelect}
      className={classNames(
        styles.element,
        {
          [styles.withDragging]: withDragging,
          [styles.isDragging]: isDragging,
          [styles.isSelected]: isSelected,
        },
        className
      )}
    >
      <Icon fontSize={"small"} />
      {title}
      <DeleteComponent style={{textAlign: "right"}} id={component.id} />
    </div>
  );
}

export default drag(ElementItem, "component-list");
