import $ from 'chirashi';
import Vue from 'vue';

let customComponent = Vue.component('custom-component', {
    template: './template.html'
})

module.exports = { customComponent };
