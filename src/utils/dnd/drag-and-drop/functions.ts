import { DragAndDropAlias, DragItem } from "./types";

export const toDragItem = <T>(
  item: T,
  alias: DragAndDropAlias
): DragItem<T> => {
  return { item, alias };
};
