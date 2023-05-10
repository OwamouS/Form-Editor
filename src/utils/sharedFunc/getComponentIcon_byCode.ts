import {
  Edit,
} from "@mui/icons-material";
import Apps from '@mui/icons-material/Apps';
import ContentCopy from '@mui/icons-material/ContentCopy';
import CropPortrait from '@mui/icons-material/CropPortrait';
export const getComponentIcon_byCode = (type: ComponentCode) => {
  switch (type) {
    case "form":
      return Edit;
    case "tabs":
      return ContentCopy;
    case "group":
      return Apps;
    case "page":
      return CropPortrait;
    case "element":
    default:
      return Edit;
  }
};
