import '../styles/main.scss';

import $ from 'chirashi';

//var home = require('./home.js'); // CommonJS
import home from './home.js'; // ES2015
//import customButton from './custom-classes/custom-button.js';

$.ready(() => {
    console.log('index ready');
});
