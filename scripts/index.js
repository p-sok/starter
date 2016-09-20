import '../styles/main.scss';

import $ from 'chirashi';

var content = require('./content.js');

$.ready(() => {
    console.log('document ready');

    content.init();
});
