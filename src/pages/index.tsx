import React from 'react';
import { Redirect } from 'umi';
export default () => {
  let defaultPageUrl = './';

  return <Redirect to={defaultPageUrl} />;
};
