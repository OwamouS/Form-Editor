import React from "react";
import { IconButton, Stack } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { useComponentModel } from "components/ComponentSettings/Models/componentM";
import { useAppConfigurationModel } from "../appConfigurationM";

export const SelectComponent = () => {
  const { selectedComponent } = useComponentModel();
  const { insertComponent } = useAppConfigurationModel();

  return (
    <Stack direction="column" spacing={2}>
      <div>
        <IconButton sx={{
          width: "100%",
          height: "auto",
          fontSize: "14px",
          justifyContent: "left",
          backgroundColor: "#f0f0f0",
        }} style={{borderRadius: 7}} component="label">
          <AddCircleOutlineIcon fontSize={"small"} />
          Группа страниц
        </IconButton>
      </div>
      <div>
        <IconButton sx={{
          width: "100%",
          height: "auto",
          fontSize: "14px",
          justifyContent: "left",
          backgroundColor: "#f0f0f0",
        }} style={{borderRadius: 7}} component="label">
          <AddCircleOutlineIcon fontSize={"small"} />
          Страница
        </IconButton>
      </div>
      <div>
        <IconButton sx={{
          width: "100%",
          height: "auto",
          fontSize: "14px",
          justifyContent: "left",
          backgroundColor: "#f0f0f0",
        }} style={{borderRadius: 7}} component="label">
          <AddCircleOutlineIcon fontSize={"small"} />
          Группа
        </IconButton>
      </div>
      <div>
        <IconButton sx={{
          width: "100%",
          height: "auto",
          fontSize: "14px",
          justifyContent: "left",
          backgroundColor: "#f0f0f0",
        }} style={{borderRadius: 7}} component="label">
          <AddCircleOutlineIcon fontSize={"small"}
                                onClick={() => {
                                  const component = useComponentModel
                                  .getState()
                                  .createComponent("element", { name: "Элемент" });
                                  insertComponent(component.id, selectedComponent.id);
                                }
                                }
          />
          Поле ввода
        </IconButton>
      </div>
    </Stack>
  )
};
