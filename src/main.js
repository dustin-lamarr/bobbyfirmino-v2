import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './index.css'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Song from './views/Song.vue'
import Table from './views/Table.vue'
import TrophyWall from './views/TrophyWall.vue'
import Socials from './views/Socials.vue'
import Art from "./views/Art.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/about', name: 'About', component: About},
        {path: '/song', name: 'Song', component: Song},
        {path: '/table', name: 'Table', component: Table},
        {path: '/trophy-wall', name: 'TrophyWall', component: TrophyWall},
        {path: '/socials', name: 'Socials', component: Socials},
        {path: '/art', name: 'Art', component: Art}
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
