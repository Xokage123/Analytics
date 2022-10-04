import * as React from 'react';

import Header from 'components/header';

import styles from './layout.module.scss';

const Layout: React.FC = (props) => {
  const { children } = props;

  return (
    <div className={styles.wrapper}>
      <Header />

      <main>{children}</main>
    </div>
  );
};

export default Layout;
