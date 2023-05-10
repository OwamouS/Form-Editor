import {
  Edit
} from "@mui/icons-material";
import CheckBox from '@mui/icons-material/CheckBox';
import TextFormat from '@mui/icons-material/TextFormat';
import DateRange from '@mui/icons-material/DateRange';
import Numbers from '@mui/icons-material/Numbers';
import Link from '@mui/icons-material/Link';
import AttachFile from '@mui/icons-material/AttachFile';
import AccessTime from '@mui/icons-material/AccessTime';
export const getComponentIcon_byName = (type: ComponentName) => {
  switch (type) {
    case "NUMBER":
      return Numbers;
    case "TEXT":
      return TextFormat;
    case "DATE":
      return DateRange;
    case "BOOLEAN":
      return CheckBox;
    case "FILE":
      return AttachFile;
    case "REF":
      return Link;
    case "DATETIME":
      return AccessTime;
    default:
      return Edit;
  }
};
