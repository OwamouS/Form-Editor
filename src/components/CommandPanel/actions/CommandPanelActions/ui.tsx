import React, { ChangeEvent } from "react";

import { IconButton, Tooltip } from "@mui/material";
import classNames from "classnames";
import {
  Download as DownloadIcon,
} from "@mui/icons-material";
import RefreshIcon from '@mui/icons-material/Refresh';
import PanToolIcon from '@mui/icons-material/PanTool';
import { useAppConfigurationModel } from "components/Configuration/appConfigurationM";
import styles from "./styles.module.scss";
import UploadParameters from "../upload/ui";
import { useAppStateModel } from "../../../Configuration/control-panel";


type Props = {
  className?: string;
};

export const EditorActions = ({ className }: Props) => {
  const { toggleView, downloadConfiguration, clearStorage, view } =
    useAppConfigurationModel();
  const { showSettings, showComponents, hideSettings, hideComponents } = useAppStateModel();

  return (
    <div className={classNames(styles.actions, className)}>
      <Tooltip title="Очистить форму">
        <IconButton sx={{
          width: "35px",
          height: "35px",
          color: "#696969"[200],
          "&:hover": { color: "#696969"[500] },
        }} style={{borderRadius: 0}} className={styles.button} component="label">
          <RefreshIcon onClick={clearStorage} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Скачать форму">
        <IconButton sx={{
          width: "35px",
          height: "35px",
          color: "#696969"[200],
          "&:hover": { color: "#696969"[500] },
        }} style={{borderRadius: 0}} className={styles.button} component="label">
          <DownloadIcon onClick={downloadConfiguration} />
        </IconButton>
      </Tooltip>
      {/*<UploadConfiguration />*/}
      <UploadParameters />
      <Tooltip title="Сменить вид">
        <IconButton sx={{
          width: "35px",
          height: "35px",
          color: "#696969"[200],
          "&:hover": { color: "#696969"[500] },
        }} style={{borderRadius: 0}} className={styles.button} component="label">
          <PanToolIcon
            onClick={() => {
              if(!view) {
                if(!showSettings){
                  hideSettings()
                }
                if(!showComponents){
                  hideComponents()
                }
              }
              toggleView();
            }}
          />
        </IconButton>
      </Tooltip>
    </div>
  );
};
