import React from "react";

import { NumberInput } from "components/ComponentSettings/SettingsPanelComponents/Parameters/NumberInput";
import { DateInput } from "components/ComponentSettings/SettingsPanelComponents/Parameters/DateInput";
import { StringInput } from "components/ComponentSettings/SettingsPanelComponents/Parameters/StringInput";
import { Checkbox } from "components/ComponentSettings/SettingsPanelComponents/Parameters/Checkbox";
import { DatasourceComponent as DatasourceComponentProps } from "components/ComponentSettings/Models/componentM/types";
import { ParameterType } from "components/ComponentSettings/Models/parameterM/types";
import { DateTimeInput } from "../SettingsPanelComponents/Parameters/DateTimeInput";
import { RefInput } from "../SettingsPanelComponents/Parameters/RefInput";
import { FileInput } from "../SettingsPanelComponents/Parameters/FileInput";

export const DatasourceComponent = (component: DatasourceComponentProps) => {
  const { dataSource, name } = component;
  const { type } = dataSource;

  switch (type) {
    case ParameterType.NUMBER:
      return <NumberInput element={dataSource} name={name} />;
    case ParameterType.DATE:
      return <DateInput element={dataSource} name={name} />;
    case ParameterType.BOOLEAN:
      return <Checkbox element={dataSource} name={name} />;
    case ParameterType.DATETIME:
      return <DateTimeInput element={dataSource} name={name} />;
    case ParameterType.REF:
      return <RefInput element={dataSource} name={name} />;
    case ParameterType.FILE:
      return <FileInput element={dataSource} name={name} />;
    default:
      return <StringInput element={dataSource} name={name} />;
  }
};
