import React, { FC } from "react";
import { useDrag } from "react-dnd";

import { ALLOWED_TYPES_FOR_DND } from "interfaces/dnd";
import { useComponent } from "utils/sharedFunc/useComponent";

import { SchemaTree } from "components/Configuration/appConfigurationM/types";
import { DragAndDropAlias } from "utils/dnd/drag-and-drop/types";

import styles from "./Drag.module.scss";
import { toDragItem } from "utils/dnd/drag-and-drop/functions";

export type withDraggingProps = {
  isDragging: boolean;
  item: SchemaTree;
};

export const drag = <Props extends withDraggingProps>(
  DraggedComponent: FC<Props> | undefined,
  alias: DragAndDropAlias
) => {
  return function Wrapper(props: Props) {
    const component = useComponent(props.item.id);

    if (!component) {
      return null;
    }

    const canBeDragged = ALLOWED_TYPES_FOR_DND.includes(component?.code);

    const [{ isDragging }, drag] = useDrag(() => ({
      type: alias,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging() && canBeDragged,
      }),
      item: toDragItem(component, alias),
      canDrag: canBeDragged,
    }));

    return (
      <div ref={drag} className={styles.draggedComponent}>
        {DraggedComponent && (
          <DraggedComponent {...props} isDragging={isDragging} />
        )}
      </div>
    );
  };
};
