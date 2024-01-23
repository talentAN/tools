/** @format */

import React, { useEffect } from 'react';
import { cloneDeep } from 'lodash';
import { toolB } from './b';
import style from './A.less';

const Header = props => {
  useEffect(() => {
    const a = {};
    const b = cloneDeep(a);
    console.info('fuck', b);
    toolB();
  }, []);
  return (
    <div>
      <div className={style.header}>Header</div>
      <div>body</div>
    </div>
  );
};

export default Header;
