import '../styles/main';

import $ from 'chirashi';

//var home = require('./home.js'); // CommonJS
import home from './home'; // ES2015

$.ready(() => {
    console.log('index ready');
});
