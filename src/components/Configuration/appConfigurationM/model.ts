import { create } from "zustand";
import fileDownload from "js-file-download";

import { Component } from "components/ComponentSettings/Models/componentM/types";
import { SchemaTree, ConfigurationView, GuiMode } from "./types";
import { createJSONStorage, persist } from "zustand/middleware";
import {
  deleteNode,
  fillTreeData,
  insertNodeByNeighbor,
  removeMetadata,
  swapTreeElements,
} from "./functions";
import { useComponentModel } from "components/ComponentSettings/Models/componentM";

interface State {
  view: ConfigurationView;
  configuration: SchemaTree | null;
  guiMode: GuiMode;
}

interface Functions {
  changeView: (view: ConfigurationView) => void;
  uploadConfiguration: (config: SchemaTree) => void;
  toggleView: () => void;
  downloadConfiguration: () => void;
  updateConfiguration: (data: SchemaTree) => void;
  generateAppConfig: (components: Component[]) => void;
  changeGuiMode: (mode: GuiMode) => void;
  swapComponents: (firstId: EntityId, secondId: EntityId) => void;
  insertComponent: (component: EntityId, neighborId: EntityId) => void;
  deleteComponent: (id: EntityId) => void;
  clearStorage: () => void;
}

type ConfigurationModel = Model<State, Functions>;

export const useAppConfigurationModel = create(
  persist<ConfigurationModel>(
    (set, get) => ({
      view: ConfigurationView.GUI_VIEW,
      guiMode: "drag-and-drop",
      configuration: null,
      changeView: (view) => set({ view }),
      changeGuiMode: (mode) => set({ guiMode: mode }),
      downloadConfiguration: async () => {
        const data = get().configuration;
        console.log(data);
        if (!data) {
          return;
        }

        const componentList = useComponentModel.getState().components;
        const fileName = `form.json`;
        fileDownload(
          JSON.stringify(fillTreeData([data], componentList), removeMetadata),
          fileName
        );
      },
      updateConfiguration: (configuration) => set({ configuration }),
      uploadConfiguration: async (configuration) => {
        set({ configuration });
      },
      clearStorage: () => {
        localStorage.clear()
        window.location.reload()
      },
      toggleView: () => {
        return set((state) => {
          const view =
            state.view === ConfigurationView.GUI_VIEW
              ? ConfigurationView.TEXT_VIEW
              : ConfigurationView.GUI_VIEW;

          return { view };
        });
      },
      generateAppConfig: (items: Component[]) => {
        const root = items.find((i) => i.code === "form");

        if (!root) {
          throw new Error();
        }

        const rootComponent: SchemaTree = {
          id: root?.id,
        };

        const components = items
          .filter((i) => i.code !== "form")
          .map((i) => ({ id: i.id }));

        const tabsId = useComponentModel
          .getState()
          .createComponent("tabs", { name: "Группа страниц" });
        const page1Id = useComponentModel
          .getState()
          .createComponent("page", { name: "Страница №1" });
        const page2Id = useComponentModel
          .getState()
          .createComponent("page", { name: "Страница №2" });
        const group1 = useComponentModel
          .getState()
          .createComponent("group", { name: "Группа №1" });
        const group2 = useComponentModel
          .getState()
          .createComponent("group", { name: "Группа №2" });
        const group3 = useComponentModel
          .getState()
          .createComponent("group", { name: "Группа №3" });
        const group4 = useComponentModel
          .getState()
          .createComponent("group", { name: "Группа №4" });

        const configuration = {
          ...rootComponent,
          items: [
            {
              id: tabsId,
              items: [
                {
                  id: page1Id,
                  items: [
                    {
                      id: group1,
                      items: components.filter((v, i) => i % 2 === 0),
                    },
                    {
                      id: group2,
                      items: components.filter((v, i) => i % 2 !== 0),
                    },
                  ],
                },
                {
                  id: page2Id,
                  items: [
                    {
                      id: group3,
                      items: components.filter((v, i) => i % 3 !== 0),
                    },
                    {
                      id: group4,
                      items: components.filter((v, i) => i % 2 !== 0),
                    },
                  ],
                },
              ],
            },
          ],
        };
        set({
          configuration,
        });
      },
      swapComponents: (firstId: EntityId, secondId: EntityId) => {
        const { configuration } = get();
        if (!configuration) {
          return;
        }

        const updatedConfig = swapTreeElements(
          configuration,
          firstId,
          secondId
        );

        set({ configuration: updatedConfig });
      },
      insertComponent: (componentId: EntityId, neighborId: EntityId) => {
        const { configuration } = get();
        if (!configuration) {
          return;
        }

        set({
          configuration: insertNodeByNeighbor(
            configuration,
            componentId,
            neighborId
          ),
        });
      },
      deleteComponent: (componentId: EntityId) => {
        const { configuration } = get();
        if (!configuration) {
          return;
        }

        set({
          configuration: deleteNode(configuration, componentId),
        });
      },
    }),
    {
      name: "app-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
