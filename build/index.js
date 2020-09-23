import React from './web_modules/react.js';
import ReactDOM from './web_modules/react-dom.js';
import './index.css.proxy.js';
import './web_modules/testasset.js';
import png from './assets/snowpack-logo-white.png.proxy.js'

ReactDOM.render(React.createElement('div', {style:{padding: '20px',height:'200px',backgroundColor:'black'}}, React.createElement('img', {
  style: {
    height: '160px'
  },
  src: png
})), document.getElementById('root'));