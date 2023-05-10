import { useComponentModel } from "components/ComponentSettings/Models/componentM";
import { GroupDirection } from "components/ComponentSettings/Models/componentM/types";
import React from "react";
import { DropdownInput } from "utils/mui/DropdownInput";

const LIST = [
  { label: "VERTICAL", value: "column" },
  { label: "HORIZONTAL", value: "row" },
];

export const EditGroup = () => {
  const { updateSelectedComponent, selectedComponent } = useComponentModel();

  console.log(selectedComponent);

  const handleGroupUpdate = (direction: GroupDirection) => {
    updateSelectedComponent({ ...selectedComponent, direction });
  };

  return (
    <DropdownInput
      list={LIST}
      name="Ориентация группы"
      value={selectedComponent.direction}
      onChange={handleGroupUpdate}
    />
  );
};
