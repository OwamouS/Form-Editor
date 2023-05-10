import React from "react";

import { useParameterModel } from "components/ComponentSettings/Models/parameterM";
import List from "utils/mui/List/List";

export const SelectParameter = () => {
  const parameterModel = useParameterModel();

  return <List data={parameterModel.parameters.map((p) => ({ item: p }))} />;
};
