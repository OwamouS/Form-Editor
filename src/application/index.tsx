import React from "react";
import { ComponentSettings, ComponentsPanel, Configuration } from "components";

import styles from "./styles.module.scss";
import { AppHeader } from "components/CommandPanel";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useAppStateModel } from "../components/Configuration/control-panel";

export const App: React.FC = () => {
  const { showSettings, showComponents, showHeader } = useAppStateModel();

  return (
        <DndProvider backend={HTML5Backend}>
          <div className={styles.appWrapper}>
            {showHeader &&<AppHeader />}
            <div className={styles.app}>
              {showComponents &&<ComponentsPanel className={styles.panel} />}
              <Configuration className={styles.configuration} />
              {showSettings &&<ComponentSettings className={styles.settings} />}
            </div>
          </div>
        </DndProvider>
  );
};
