import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import ReactCollapse from './ReactCollapse';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ReactCollapse />, document.getElementById('root'));
registerServiceWorker();
