import React from "react";

import { DropdownInput, DropdownItem } from "utils/mui/DropdownInput";
import { TextInput } from "utils/mui/TextInput";
import { Header } from "utils/mui/Header";
import { useParameterModel } from "components/ComponentSettings/Models/parameterM";
import { useComponentModel } from "components/ComponentSettings/Models/componentM";
import { EditGroup } from "../edit-group";
import { EditParameterFields } from "../../edit-parameter-fields";

import styles from "./styles.module.scss";
import { Parameter, ParameterType } from "components/ComponentSettings/Models/parameterM/types";

const convertParametersToList = (params: Parameter[]): DropdownItem[] => {
  return params.map((param) => ({
    label: param.name,
    value: param.type,
  }));
};

export const EditComponent = () => {
  const { parameters } = useParameterModel();
  const { updateSelectedComponent, selectedComponent } = useComponentModel();

  const list = convertParametersToList(parameters);
  const dataSource =
    selectedComponent?.code === "element" && selectedComponent?.dataSource;

  const updateComponentDatasource = (dataSource: Parameter) => {
    const updated = { ...selectedComponent, dataSource };

    updateSelectedComponent(updated);
  };

  const updateDatasourceType = (type: ParameterType) => {
    const updated = {
      ...selectedComponent,
      dataSource: {
        ...dataSource,
        type,
        properties: [],
      },
    };

    updateSelectedComponent(updated);
  };

  const updateLabel = (name: string) => {
    const updated = { ...selectedComponent, name };
    updateSelectedComponent(updated);
  };

  const componentLabel = selectedComponent?.name || "";

  return (
    <div className={styles.wrapper}>
      {!selectedComponent && (<Header>Выберите компонент</Header>)
      }
      {selectedComponent && (
        <div className={styles.form}>
          <Header>Настройки компоненты</Header>
          {dataSource && (
            <DropdownInput
              list={list}
              onChange={updateDatasourceType}
              name="Источник данных"
            />
          )}
          {selectedComponent.code === "group" && <EditGroup />}
          <TextInput
            fullWidth
            label="Название поля"
            value={componentLabel}
            onChange={updateLabel}
          />
          {dataSource && (
            <EditParameterFields
              parameter={dataSource}
              onEdit={updateComponentDatasource}
            />
          )}
        </div>
      )}
    </div>
  );
};
