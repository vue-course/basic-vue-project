import Vue from 'vue';
import Component from 'vue-class-component';

import './navbar.css';
import {Prop} from 'vue-property-decorator';

@Component({
    template: `<ul class="navbar">
            <li v-for="item in links" 
            @click="onClick(item)"
            class="nav-item"
            :class="{'active': selectedItem === item}">{{item}}</li>
        </ul>`,
})
export class Navbar extends Vue {
    selectedItem: string = null;

    @Prop() items: Array<string>;

    defaultItems = ['avi', 'moshe', 'jacob'];

    get links() {
        return this.items || this.defaultItems;
    }

    onClick(item) {
        this.selectedItem = item;
        this.$emit('item-click', item);
    }
}