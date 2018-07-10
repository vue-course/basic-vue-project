import Vue from 'vue';
import './sass/main.scss';
import {Navbar} from './components/navbar/navbar';

// tslint:disable-next-line:no-unused-expression
new Vue({
    el: '#app-main',
    data: {
        instance: 'Using The Vue Instance',
        links: [
            'oh',
            'my',
            'god'
        ]
    },
    methods: {
        onClick(item) {
            alert('parent recognized item click: ' + item);
        }
    },

    components: {
        Navbar
    }
});
