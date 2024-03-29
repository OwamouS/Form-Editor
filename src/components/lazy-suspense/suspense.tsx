import classNames from "classnames";
import React, { Suspense } from "react";
import Loader from "utils/mui/Loader/Loader";
const DEFAULT_FALLBACK = <Loader />;
import styles from "./styles.module.scss";
type ComponentProps = {
  className?: string;
};
const withSuspense = (
  Component: React.FunctionComponent<ComponentProps>,
  fallback = DEFAULT_FALLBACK
) => {
  return ({ className }: ComponentProps) => (
    <div className={classNames(styles.suspenseWrapper, className)}>
      <Suspense fallback={fallback}>
        <Component className={className} />
      </Suspense>
    </div>
  );
};

export default withSuspense;
