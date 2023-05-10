import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { ConfigurationView, GuiMode, SchemaTree } from "../appConfigurationM/types";
interface AppState {
  showSettings: boolean;
  showHeader: boolean;
  showComponents: boolean;
  showCamera: boolean;
}
interface AppStateFunctions {
  hideSettings: () => void;
  hideHeader: () => void;
  hideComponents: () => void;
  hideCamera: () => void;
}

export enum ViewState {
  OFF,
  ON,
}

type AppStateModel = Model<AppState, AppStateFunctions>;

export const useAppStateModel = create(
  persist<AppStateModel>(
    (set, get) => ({
      showSettings: true,
      showHeader: true,
      showComponents: true,
      showCamera: false,
      hideSettings: () => {
        set({ showSettings: !get().showSettings });
      },
      hideComponents: () => {
        set({ showComponents: !get().showComponents });
      },
      hideHeader: () => {
        set({ showHeader: !get().showHeader });
      },
      hideCamera: () => {
        set({ showCamera: !get().showCamera });
      },
    }),
    {
      name: "app-state-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
