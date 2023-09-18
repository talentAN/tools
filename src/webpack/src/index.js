/** @format */
import React from 'react';
import { createRoot } from 'react-dom/client';
import A from './A.jsx';

document.body.innerHTML = '<div id="app"></div>';

// 渲染你的 React 组件
const root = createRoot(document.getElementById('app'));
root.render(<A />);
