import React, { FC, PropsWithChildren, ReactNode } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

type Size = 'normal';
type Props = {
  isLoading: boolean,
  length?: number,
  isNoDataContainerVisible?: boolean,
  noDataContainer?: string | ReactNode,
  className?: string,
  size?: Size,
};

const Preloader: FC<PropsWithChildren<Props>> = ({
  isLoading,
  length = 1,
  isNoDataContainerVisible = true,
  noDataContainer = 'Ничего не найдено',
  children,
  className,
  size = 'normal',
}) => (
  <>
    {isLoading ? (
      <div
        className={cx(
          styles.preloader,
          className,
          styles[size],
        )}
      >
        <span />
        <span />
        <span />
      </div>
    )
      : (
        <>
          {isNoDataContainerVisible && !length ? (
            <div className={styles.noDataFound}>
              {noDataContainer}
            </div>
          ) : children}
        </>
      )}
  </>
);

export default Preloader;
