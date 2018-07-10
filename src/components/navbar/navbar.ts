import Vue from 'vue';

import './navbar.css';

export const Navbar = Vue.extend({
    name: 'navbar',
    template: `<ul class="navbar">
            <li v-for="item in items" 
            @click="onClick(item)"
            class="nav-item"
            :class="{'active': selectedItem === item}">{{item}}</li>
        </ul>`,
    data() {
        return {
            selectedItem: null,
            items: [
                'avi',
                'moshe',
                'jacob'
            ]
        };
    },
    methods: {
        onClick(item) {
            this.selectedItem = item;
        }
    }
});