import React from "react";

import { EditJsonConfiguration } from "components/Configuration/view/edit-json-configuration";
import { EditViewConfiguration } from "components/Configuration/view/edit-view-configuration";
import { useAppConfigurationModel } from "components/Configuration/appConfigurationM";
import styles from "./styles.module.scss";
import { ConfigurationView } from "components/Configuration/appConfigurationM/types";

const ViewConfiguration = () => {
  const { view, configuration } = useAppConfigurationModel();

  const getContent = () => {

    if (!configuration) {
      return (
        <div className={styles.uploadFallback}>
        </div>
      );
    }

    return view === ConfigurationView.TEXT_VIEW ? (
      <EditJsonConfiguration />
    ) : (
        <EditViewConfiguration />
    );
  };

  return <div className={styles.configuration}>{getContent()}</div>;
};

export default ViewConfiguration;
