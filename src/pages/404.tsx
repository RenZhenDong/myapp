import React from 'react';
import { router } from 'umi';

const PageNotFound: React.FC = () => {
  return (
    <div >
      <div style={{marginTop:'20%'}}>
        <h2 style={{textAlign:'center', fontSize: '0.16rem'}}>抱歉，您访问的页面找不到了!!</h2>
        <p style={{textAlign:'center',  fontSize: '0.16rem'}}>若刷新后仍无法查看，请联系您的商务经理......</p>
        <div style={{textAlign:'center'}}>
          <button  onClick={e => router.push('/main')}>
            返回
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
