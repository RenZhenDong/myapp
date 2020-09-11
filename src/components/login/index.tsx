import React ,{ useState} from 'react';
import styles from './index.less';
import { signin } from '@/services/query/index';
import { connect } from 'dva';
import { router } from 'umi';

interface Props {
}
const LoginFC: React.FC<Props> = () => {
  let [name, setName] = useState('Forrest');
  let [pwd, setPwd] = useState('123456');
  let login=function(){
    signin({name:name, password:pwd}).then((res:any)=>{
      if(res.code !== 200) {
        alert(res.message);
        return;
      }
      sessionStorage.setItem('isLogin',JSON.stringify({name: name, pwd: pwd}));
      router.replace('/main');
      window.location.reload()
    })
  }

  return (
    <div className={styles.content}>
      <div className={styles.logo}></div>
      <div className={styles.inputbox}>
        <div className={styles.input}>
          <div>用户名：</div>
          <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="请输入用户名"/>
        </div>
        <div className={styles.input}>
          <div>密&nbsp;&nbsp;&nbsp;码：</div>
          <input type="password" value={pwd} onChange={(event)=>setPwd(event.target.value)} placeholder="请输入密码"/>
        </div>
      </div>
      <div className={styles.login} onClick={()=>login()}>登录</div>
    </div>
  );
};
const Loginer = connect(() => ({
}))(LoginFC);

export { Loginer };
