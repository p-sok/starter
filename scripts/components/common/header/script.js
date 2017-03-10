import Vue from 'vue';
console.log(Vue);
let headerView = Vue.component('headerView', {
    template: require('./template.html')
});

module.exports = { headerView }
