import React, { useState } from "react";
import JSONInput from "react-json-editor-ajrm";

import { extractJsonBody } from "components/Configuration/appConfigurationM/functions";
import { TreeTemplateProps } from "components/Configuration/ui-component-tree";
import { useComponent } from "utils/sharedFunc/useComponent";
import { ToggleArrow } from "../ToggleForTree";
import styles from "./styles.module.scss";
import { useComponentModel } from "components/ComponentSettings/Models/componentM";
import classNames from "classnames";
import { Component } from "components/ComponentSettings/Models/componentM/types";

type Props = TreeTemplateProps;

export default function JsonElement({ item, children }: Props) {
  const component = useComponent(item.id);
  const { updateSelectedComponent, selectedComponent } =
    useComponentModel();

  const [itemsVisible, toggleItemsVisibility] = useState(true);

  if (!component) {
    return null;
  }

  const json = extractJsonBody(component);

  const isSelected = selectedComponent?.id === item.id;

  const handleComponentUpdate = ({
    jsObject,
  }: {
    jsObject: Component | undefined;
  }) => {
    if (!jsObject || !selectedComponent) {
      return;
    }

    updateSelectedComponent({ ...jsObject, id: selectedComponent.id });
  };

  const showValidation = isSelected && Boolean(selectedComponent);

  return (
    <div className={styles.jsonWrapper}>
      <div
        className={classNames(styles.jsonInput)}
      >
        <JSONInput
          placeholder={JSON.parse(json)}
          style={{ labelColumn: { display: "none" } }}
          confirmGood={showValidation}
          onKeyPressUpdate={true}
          onChange={handleComponentUpdate}
          colors={{
            default: 'black',
            background: 'white',
            string: 'black',
            keys: 'black',
          }}
        />
      </div>
      {children && (
        <ToggleArrow
          color="#5e5d5d"
          expanded={itemsVisible}
          onClick={() => toggleItemsVisibility(!itemsVisible)}
          className={styles.expandIcon}
        />
      )}
      {
        <div
          className={classNames(styles.childrenInput, {
            [styles.hiddenChildren]: !itemsVisible,
          })}
        >
          {children}
        </div>
      }
    </div>
  );
}

export * from "./JsonElement";
