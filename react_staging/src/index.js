// 核心库
import React from 'react'
// DOM 库
import ReactDOM from 'react-dom/client'
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <HashRouter>
    <App />
  </HashRouter>

)
