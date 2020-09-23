import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'testasset';
import png from './assets/snowpack-logo-white.png'

ReactDOM.render(React.createElement('div', {style:{padding: '20px',height:'200px',backgroundColor:'black'}}, React.createElement('img', {
  style: {
    height: '160px'
  },
  src: png
})), document.getElementById('root'));