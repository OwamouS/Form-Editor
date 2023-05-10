import React from "react";

import { Skeleton } from "@mui/material";

import { drop, withDroppingProps } from "utils/dnd/Drop";

import styles from "./DropZone.module.scss";
import { SchemaTree } from "components/Configuration/appConfigurationM/types";

type Props = withDroppingProps<SchemaTree>;

function DropZone({ isHovered }: Props) {
  if (isHovered) {
    return <Skeleton className={styles.isHovered} animation="pulse" />;
  }

  return <div className={styles.zone}></div>;
}

export default drop(DropZone, ["component-list"]);
