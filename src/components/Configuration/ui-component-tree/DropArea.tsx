import React from "react";

import { Skeleton } from "@mui/material";
import { drop, withDroppingProps } from "utils/dnd/Drop";

import { SchemaTree } from "components/Configuration/appConfigurationM/types";

import styles from "./DropArea.module.scss";
import { useComponent } from "utils/sharedFunc/useComponent";
import { DatasourceComponent as ComponentType } from "components/ComponentSettings/Models/componentM/types";
import { DatasourceComponent } from "components/ComponentSettings/componentDatasource";
import { DragAndDropAlias } from "utils/dnd/drag-and-drop/types";

const previewAlias: DragAndDropAlias[] = [
  "component-list",
  "app-form",
  "form-list",
];

const DropArea = ({
  isHovered,
  droppingItem,
}: withDroppingProps<SchemaTree>) => {
  const shouldRenderPreview =
    droppingItem && previewAlias.includes(droppingItem.alias);
  const component = useComponent<ComponentType>(droppingItem?.item.id);

  if (shouldRenderPreview && isHovered && component) {
    return (
      <div className={styles.preview}>
        {component.code === "element" && <DatasourceComponent {...component} />}
      </div>
    );
  }
  if (isHovered) {
    return <Skeleton className={styles.dropArea} />;
  }

  return <div className={styles.dropAreaIdle}></div>;
};

export default drop(DropArea, [
  "app-form",
  "component-list",
  "form-list",
]);
