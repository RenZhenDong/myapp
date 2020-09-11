import React, {useState} from 'react';
import { connect } from 'dva';
import styles from './index.less';
import { useDispatch } from 'react-redux';

interface Props {

}
const HeaderFC: React.FC<Props> = React.memo<Props>(function Head(props) {
  // 调用model中的方法
  const dispatch = useDispatch();

  let [tabList, setTablist] = useState([
    {
      title: '我的',
      sel: false,
    },
    {
      title: '发现',
      sel: true,
    },
    {
      title: '世界',
      sel: false,
    }
  ]);
  return (
    <div className={styles.content}>
      <div className={styles.set} onClick={()=>{
      }}>≡</div>
      {
        tabList.map((item, index:number)=>{
          return(
            <div
            className={`${styles.content_item}  ${item.sel ? styles.content_item_active :''}`}
            key={index}
            onClick={()=>{
              let _tabList = tabList.concat();
              _tabList.map((itm, idx)=>{
                itm.sel = false;
                if(idx === index) {
                  item.sel = true;
                }
              });
              setTablist(_tabList);
              dispatch({
                type: '/main/setTab',
                payload: { tab: index },
              });
            }}
            >{item.title}</div>
          )
        })
      }
    </div>
  );
});

const Header = connect(() => ({
}))(HeaderFC);

export { Header };
