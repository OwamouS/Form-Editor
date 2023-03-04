import RefreshIcon from '@mui/icons-material/Refresh';
import UploadIcon from '@mui/icons-material/Upload';
import DownloadIcon from '@mui/icons-material/Download';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PanToolIcon from '@mui/icons-material/PanTool';
import MenuList from '../../utils/mui/MenuList/MenuList';
import styles from './style.module.css';
const CommandPanel = () => {
  return (
    <div className={styles.commandPanel}>
      <RefreshIcon className={styles.icon} />
      <DownloadIcon className={styles.icon} />
      <UploadIcon className={styles.icon} />
      <PlayArrowIcon className={styles.icon} />
      <MenuList />
      <PanToolIcon className={styles.icon} />
    </div>
  );
};
export default CommandPanel;
