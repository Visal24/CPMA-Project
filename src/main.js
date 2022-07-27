import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueAwesomePaginate from "vue-awesome-paginate";
import {faHouse,faCube,faMagnifyingGlass,faTableCellsLarge,faCrown,faArrowUp,faArrowDown,faEllipsisVertical,faAngleDown,faAngleLeft,faAngleRight,faTrashCan} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope,faMessage,faBell,faMoon} from '@fortawesome/free-regular-svg-icons'
import "vue-awesome-paginate/dist/style.css";

library.add(faHouse,faEnvelope,faMessage,faCube,faMagnifyingGlass,faBell,faTableCellsLarge,faMoon,faCrown,faArrowUp,faArrowDown,faEllipsisVertical,faAngleDown,faAngleLeft,faAngleRight,faTrashCan)

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.use(VueAwesomePaginate)
.mount('#app')
.use(store)
const store = createStore({

})

