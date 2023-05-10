import React from "react";

import { useUploadFile } from "utils/sharedFunc/uploadFile";
import { useParameterModel } from "components/ComponentSettings/Models/parameterM";
import { IconButton, Tooltip } from "@mui/material";
import styles from "./styles.module.scss";
import { useAppConfigurationModel } from "components/Configuration/appConfigurationM";
import { useComponentModel } from "components/ComponentSettings/Models/componentM";
import { withPipe } from "utils/sharedFunc/withPipe";
import { InputParameter } from "components/ComponentSettings/Models/parameterM/types";
import UploadFileIcon from '@mui/icons-material/UploadFile';

const UploadParameters = () => {
  const { loadParameters } = useParameterModel();
  const { createComponentsFromParameters: genenerateComponents } =
    useComponentModel();

  const { generateAppConfig } = useAppConfigurationModel();

  const handleLoadParameters = (data: InputParameter[]) => {
    withPipe(loadParameters, genenerateComponents, generateAppConfig)(data);
  };

  const [, uploadFile] = useUploadFile<InputParameter[]>(handleLoadParameters);

  return (
    <Tooltip title="Загрузить параметры">
      <IconButton sx={{
        width: "35px",
        height: "35px",
        color: "#696969"[200],
        "&:hover": { color: "#696969"[500] },
      }} style={{borderRadius: 0}} className={styles.button} component="label">
        <UploadFileIcon />
        <input hidden accept="txt/*" multiple type="file" onChange={uploadFile} />
      </IconButton>
    </Tooltip>
  );
};

export default UploadParameters;
