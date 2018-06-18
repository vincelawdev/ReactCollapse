import React from 'react';
import ReactDOM from 'react-dom';
import ReactCollapse from './ReactCollapse';
import content from './assets/json/content.json';
import './assets/css/index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ReactCollapse content={content} />, document.getElementById('root'));
registerServiceWorker();
