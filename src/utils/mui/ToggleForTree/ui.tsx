import React from "react";

import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import ArrowDropUp from '@mui/icons-material/ArrowDropUp';

type Props = {
  expanded: boolean;
  onClick: () => void;
  color?: string;
  className?: string;
};
export function ToggleArrow({ expanded, onClick, color, className }: Props) {
  return expanded ? (
    <ArrowDropUp
      onClick={onClick}
      style={{ color }}
      className={className}
    />
  ) : (
    <ArrowDropDown
      onClick={onClick}
      style={{ color }}
      className={className}
    />
  );
}
