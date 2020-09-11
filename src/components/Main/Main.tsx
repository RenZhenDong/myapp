import React from 'react';
import styles from './Main.less';

export interface MainProps {
  user?: boolean;
}

const Main: React.FC<MainProps> = props => {
  return <section className={styles.main}>{props.children}</section>;
};

export { Main };
