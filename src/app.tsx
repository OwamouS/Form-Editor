import React from 'react';
import { LeftPanel, MidPanel, RightPanel, HeaderPanel } from './components';
import styles from './style.module.css';
export const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <HeaderPanel />
      <LeftPanel />
      <MidPanel />
      <RightPanel />
    </div>
  );
};

App.displayName = 'App';
