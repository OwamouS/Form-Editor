export enum ConfigurationView {
  GUI_VIEW,
  TEXT_VIEW,
}

export type SchemaTree = {
  id: EntityId;
  items?: SchemaTree[];
};

export type GuiMode = "edit" | "drag-and-drop";
