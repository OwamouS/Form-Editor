import React from "react";

import { useAppConfigurationModel } from "components/Configuration/appConfigurationM";

import styles from "./styles.module.scss";
import { RecursiveTree } from "components/Configuration/ui-component-tree";
import JsonElement from "utils/mui/JsonElement/JsonElement";

export const EditJsonConfiguration = () => {
  const configuration = useAppConfigurationModel(
    (state) => state.configuration
  );

  return (
    <div className={styles.schema}>
      <div className={styles.jsonPreview}>
        <RecursiveTree tree={configuration} template={JsonElement} />
      </div>
    </div>
  );
};
