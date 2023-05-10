import React, { FC } from "react";

import { useComponentModel } from "components/ComponentSettings/Models/componentM";

import { TreeTemplateProps } from "components/Configuration/ui-component-tree";

import styles from "./checkDnD.module.scss";
import { useComponent } from "utils/sharedFunc/useComponent";

export function checkDnD<Props extends TreeTemplateProps>(
  Component: FC<Props>
) {
  return function WatchedComponent(props: Props) {
    const component = useComponent(props.item.id);

    const selectComponent = useComponentModel((state) => state.selectComponent);

    if (!component) {
      return <Component {...props} />;
    }

    const { code, id } = component;

    if (code !== "element") {
      return <Component {...props} />;
    }

    const handleSelect = () => {
      selectComponent(id);
    };

    return (
      <div className={styles.watchedComponent} onClick={handleSelect}>
        <Component {...props} />
      </div>
    );
  };
}
