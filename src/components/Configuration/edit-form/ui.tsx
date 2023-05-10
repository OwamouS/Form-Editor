import React from "react";

import { useAppConfigurationModel } from "components/Configuration/appConfigurationM";
import { RecursiveTree } from "components/Configuration/ui-component-tree";

import FormElement from "utils/mui/FormElement/FormElement";

function EditForm() {
  const { configuration } = useAppConfigurationModel();

  if (!configuration) {
    return "Загрузите форму/параметры";
  }

  return <RecursiveTree tree={configuration} template={FormElement} />;
}

export default EditForm;
