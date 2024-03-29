import { SchemaTree } from "components/Configuration/appConfigurationM/types";
import { useComponentModel } from "components/ComponentSettings/Models/componentM";
import { Component } from "components/ComponentSettings/Models/componentM/types";
import React, { useState } from "react";
import TabMenu, { TabItem } from "utils/mui/TabMenu/TabMenu";
import { RecursiveTree } from "../model";
import { ComponentProps } from "./types";

import styles from "./Tabs.module.scss";

const convertToTabs = (
  items: SchemaTree[],
  components: Component[]
): TabItem<EntityId>[] => {
  return items.map((i, index) => ({
    label: components.find((c) => c.id === i.id)?.name || "Таб №" + index + 1,
    value: i.id,
  }));
};
export const Tabs = ({ children, subTree }: ComponentProps) => {
  const tabId = subTree.items ? subTree.items[0].id : null;

  const [visibleTabId, setVisibleTabId] = useState(tabId);
  const { components } = useComponentModel();

  if (!visibleTabId) {
    return children;
  }

  const handleTabChange = (id: EntityId) => {
    setVisibleTabId(id);
  };

  const visibleSubTree = subTree.items?.find((i) => i.id === visibleTabId);
  return (
    <div className={styles.tabs}>
      <TabMenu
        activeTab={visibleTabId}
        tabs={convertToTabs(subTree.items || [], components)}
        onChange={handleTabChange}
      />
      <div className={styles.tabContent}>
        <RecursiveTree tree={visibleSubTree} />
      </div>
    </div>
  );
};
