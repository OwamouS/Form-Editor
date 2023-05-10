import React, { ReactNode, useState } from "react";
import { TreeTemplateProps } from "components/Configuration/ui-component-tree";
import ElementItem from "./ElementItem";
import DropZone from "./DropZone";
import { useComponent } from "utils/sharedFunc/useComponent";
import { ListItem } from "@mui/material";
import { ToggleArrow } from "../ToggleForTree";
import styles from "./FormElement.module.scss";
import { OnDragFn } from "utils/dnd/drag-and-drop/types";
import { SchemaTree } from "components/Configuration/appConfigurationM/types";
import { useAppConfigurationModel } from "components/Configuration/appConfigurationM";

function FormElement({ children, item }: TreeTemplateProps) {
  const [expanded, setExpanded] = useState(true);
  const { swapComponents } = useAppConfigurationModel();

  const component = useComponent(item.id);

  if (!component) {
    return null;
  }

  const handleDrop: OnDragFn<SchemaTree> = (droppedItem) => {
    swapComponents(droppedItem.item.id, component.id);
  };

  return (
    <div className={styles.element}>
      <DropZone item={component} onDrop={handleDrop} />
      <ListItem direction={"row"} style={{ padding: 0 }}>
        <ElementItem item={component} title={component?.name || ""} />
        {children && (
          <ToggleArrow
            expanded={expanded}
            onClick={() => setExpanded(!expanded)}
          />
        )}
      </ListItem>
      {expanded && <ElementChildren list={children} />}
    </div>
  );
}

type ElementChildrenProps = {
  list: ReactNode;
};

function ElementChildren({ list }: ElementChildrenProps) {
  return <div className={styles.group}>{list}</div>;
}

export default FormElement;
