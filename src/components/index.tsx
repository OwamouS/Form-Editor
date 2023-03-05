import React, { lazy, Suspense } from 'react';
import Loader from '../utils/mui/Loader/Loader';
const ComponentSettings = lazy(() => import('./ComponentSettings'));
const Configuration = lazy(() => import('./Configuration'));
const ComponentMenuPanel = lazy(() => import('./ComponentMenuPanel'));
const CommandPanel = lazy(() => import('./CommandPanel'));
const renderLoader = <Loader />;
export const RightPanel = () => (
  <Suspense fallback={renderLoader}>
    <ComponentSettings />
  </Suspense>
);
export const MidPanel = () => (
  <Suspense fallback={renderLoader}>
    <Configuration />
  </Suspense>
);
export const LeftPanel = () => (
  <Suspense fallback={renderLoader}>
    <ComponentMenuPanel />
  </Suspense>
);
export const HeaderPanel = () => (
  <Suspense fallback={renderLoader}>
    <CommandPanel />
  </Suspense>
);
