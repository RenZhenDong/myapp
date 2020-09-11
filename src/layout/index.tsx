import React, { useEffect, useState } from 'react';
import { Loginer, Header, Main } from '@/components/index'

const basclayout: React.FC<any> = React.memo((props) => {
  const { children } = props;
  let [isLogin, setIsLogin] = useState<boolean>(false);
  useEffect(() => {
    sessionStorage.getItem('isLogin') ? setIsLogin(true) : setIsLogin(false);
  }, []);
  return (
  <div  style={{height:'100%'}}>
    {
      isLogin ?
      <Main>
        <Header></Header>
        {children}
      </Main>
         :
        <Loginer></Loginer>
    }

  </div>
  )

}
);


export default basclayout;
