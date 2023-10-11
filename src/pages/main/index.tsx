import React, { useState, useEffect } from 'react';
import styles from './index.less';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { Center } from './center/index';
import { Find } from './find/index';
import { World } from './world/index';
import { State } from '../models/index';

interface Props {
  getSel: Function;
}
const MainerFC: React.FC<Props> = React.memo<Props>(function Main(props) {
  // 调用model中的方法
  const dispatch = useDispatch();
  let user: any = sessionStorage.getItem('isLogin');
  user = JSON.parse(user);
  if (user && user.name) {
    dispatch({
      type: '/main/setName',
      payload: { name: user.name },
    });
  }

  // 获取model中的数据
  const state: State = useSelector((main: any) => main['/main']);
  // 当前设备屏幕宽度
  const SW: number = window.screen.width;
  // 各组件left值
  const [cf, setCF] = useState<number>(-SW);
  const [ff, setFF] = useState<number>(0);
  const [wf, setWF] = useState<number>(SW);

  useEffect(() => {
    if (state.tab === 1) {
      setCF(-SW);
      setFF(0);
      setWF(SW);
    } else if (state.tab === 0) {
      setCF(0);
      setFF(SW);
      setWF(2 * SW);
    } else {
      setCF(-2 * SW);
      setFF(-SW);
      setWF(0);
    }
  }, [SW, state]);

  return (
    <div className={styles.content}>
      <Center left={cf}></Center>
      <Find left={ff}></Find>
      <World left={wf}></World>
    </div>
  );
});

export default MainerFC;
