import React from "react";

import ClearIcon from '@mui/icons-material/Clear';
import { Button, IconButton, Tooltip } from "@mui/material";

import { useAppConfigurationModel } from "components/Configuration/appConfigurationM";
import styles from "./styles.module.scss";

type Props = {
  id: EntityId;
};
const DeleteComponent = ({ id }: Props) => {
  const { deleteComponent } = useAppConfigurationModel();

  const handleDelete = () => {
    deleteComponent(id);
  };
  return (
    <Tooltip title="Удалить элемент">
      <IconButton sx={{
        width: "25px",
        height: "25px",
        color: "#ffffff",
        "&:hover": { color: "#696969"[500] },
      }} style={{borderRadius: 0}} className={styles.button} component="label">
        <ClearIcon onClick={handleDelete} />
      </IconButton>
    </Tooltip>
  );
};

export default DeleteComponent;
