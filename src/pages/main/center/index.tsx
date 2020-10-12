import React, { useState, useEffect } from 'react';
import styles from './index.less';
import { findUser, gettheme } from '@/services/query/index';
import { useSelector } from 'react-redux';
import { State } from '@/pages/models/index';

interface Props {
  left: number;
}
const Center: React.FC<Props> = React.memo<Props>(function Main(props) {
  const { left } = props;
  // 获取model中的数据
  const state: State = useSelector((main: any) => main['/main']);

  let [userData, setUserData] = useState();
  if (left === 0 && state.name && !userData) {
    findUser({ name: state.name }).then((res: any) => {
      setUserData(res.data);
    });
  }
  useEffect(() => {
    gettheme().then();
  }, []);
  return (
    <div className={styles.content} style={{ left: left }}>
      我的
    </div>
  );
});

export { Center };
