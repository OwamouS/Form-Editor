import { lazy } from "react";

import withSuspense from "components/lazy-suspense/suspense";

const CentralPanel = lazy(() => import("./Configuration"));
const LeftPanel = lazy(() => import("./ComponentMenuPanel"));
const RightPanel = lazy(() => import("./ComponentSettings"));

export const ComponentsPanel = withSuspense(LeftPanel);
export const Configuration = withSuspense(CentralPanel);
export const ComponentSettings = withSuspense(RightPanel);
