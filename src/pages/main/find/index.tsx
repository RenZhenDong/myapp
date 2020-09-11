import React ,{ useEffect} from 'react';
import styles from './index.less';


interface Props {
left:number
}
const Find: React.FC<Props> = React.memo<Props>(function Main(props)  {
  const {left} = props
  return (
    <div className={styles.content} style={{left:left}}>
     发现
    </div>
  );
});


export { Find };
