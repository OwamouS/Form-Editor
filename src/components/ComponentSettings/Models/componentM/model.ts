import { Parameter } from "components/ComponentSettings/Models/parameterM/types";
import { generateEntityId } from "utils/sharedFunc/getNewId";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { Component, ComponentForm, DatasourceComponent } from "./types";

interface ComponentState {
  selectedComponent: Component | null;
  components: Component[];
  updateSelectedComponent: (component: Component) => void;
  selectComponent: (id: EntityId) => void;
  deselectComponent: () => void;
  createComponentsFromParameters: (
    parameters: Parameter[]
  ) => DatasourceComponent[];
  duplicateComponent: (id: EntityId) => Component | null;
  swapComponents: (firstId: EntityId, secondId: EntityId) => void;
  createComponent: (
    code: ComponentCode,
    fields?: Omit<Component, "id">
  ) => Component;
}

export const useComponentModel = create(
  persist<ComponentState>(
    (set, get) => ({
      selectedComponent: null,
      components: [],
      selectComponent: (id: EntityId) => {
        set((state) => ({
          selectedComponent: state.components.find((c) => c.id === id),
        }));
      },
      updateSelectedComponent: (selectedComponent: Component) =>
        set((state) => {
          const components = state.components.map((c) =>
            c.id === selectedComponent.id ? selectedComponent : c
          );

          const currentComponent = components.find(
            (c) => c.id === selectedComponent.id
          );

          const updatedComponent = {
            ...currentComponent,
            ...selectedComponent,
          };

          console.log(selectedComponent, updatedComponent);

          return { components, selectedComponent: updatedComponent };
        }),
      createComponentsFromParameters: (parameters: Parameter[]) => {
        const components: DatasourceComponent[] = parameters.map((param) => ({
          dataSource: param,
          id: generateEntityId(),
          code: "element",
          name: `${param.type}`,
        }));

        // create root
        const rootComponent: ComponentForm = {
          code: "form",
          id: generateEntityId(),
          name: "Форма",
        };

        const result = [rootComponent, ...components];

        set({ components: result });

        return result;
      },
      createComponent: (
        code: ComponentCode,
        fields?: Partial<Component>
      ): EntityId => {
        const newComponent = {
          code,
          id: generateEntityId(),
          ...fields,
        };
        set((state) => ({ components: [...state.components, newComponent] }));
        return newComponent.id;
      },
      swapComponents: (firstId: EntityId, secondId: EntityId) => {
        set((state) => {
          const firstComponent = state.components.find((c) => c.id === firstId);
          const secondComponent = state.components.find(
            (c) => c.id === secondId
          );
          const components = state.components.map((c) => {
            if (c.id === firstId) {
              return secondComponent;
            }

            if (c.id === secondId) {
              return firstComponent;
            }

            return c;
          });

          return { components };
        });
      },
      duplicateComponent: (id: EntityId) => {
        const { components } = get();
        const original = components.find((c) => c.id === id);

        if (!original) {
          return null;
        }

        return original;
      },
      deselectComponent: () => {
        set({ selectedComponent: null });
      },
    }),
    {
      name: "component-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
