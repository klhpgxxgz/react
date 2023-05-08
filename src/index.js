import React from 'react';
import ReactDOM from 'react-dom/client';
import MyApp from './React68';

// React51: 父组件与子组件的回调
// React52: 2个组件之间的回调 
// React53: Context 透过层层传递，实现Provider, Consumer 传递 
// React54: PropTypes 用多种方式保护传参
// React59-60: 组件生命周期
// React61-67: render props 用法
// React68: 使用children 来替换render props 用法

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
);



// import ReactDOM from 'react-dom/client';
// import './index.css';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();