import React, { useState } from "react";

import styles from "./styles.module.scss";
import TabMenu, { TabItem } from "utils/mui/TabMenu/TabMenu";
import { SelectParameter } from "components/Configuration/select-parameter";
import { SelectComponent } from "components/Configuration/select-component";
import EditForm from "components/Configuration/edit-form/ui";

enum TabValues {
  PARAMETERS,
  FORM,
  COMPONENTS,
}

const navTabs: TabItem<TabValues>[] = [
  {
    label: "Параметры",
    value: TabValues.PARAMETERS,
  },
  {
    label: "Форма",
    value: TabValues.FORM,
  },
  {
    label: "Компоненты",
    value: TabValues.COMPONENTS,
  },
];

const TabContent = ({ tab }: { tab: TabValues }) => {
  switch (tab) {
    case TabValues.PARAMETERS:
      return <SelectParameter />;
    case TabValues.COMPONENTS:
      return <SelectComponent />;
    case TabValues.FORM:
    default:
      return <EditForm />;
  }
};

const ComponentsPanel = () => {
  const [selectedTab, setSelectedTab] = useState(navTabs[0].value);

  return (
    <div className={styles.panel}>
      <div className={styles.content}>
        <TabMenu
          tabs={navTabs}
          onChange={setSelectedTab}
          activeTab={selectedTab}
        />
        <TabContent tab={selectedTab} />
      </div>
    </div>
  );
};

export default ComponentsPanel;
