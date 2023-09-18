/** @format */

import React, { useEffect } from 'react';
import { toolB } from './b';
import style from './A.less';

const Header = props => {
  useEffect(() => {
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
