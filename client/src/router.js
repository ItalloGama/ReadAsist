import VueRouter from 'vue-router'
import BookList from './pages/BookList.vue'
import Tip from './pages/Tip.vue'
import Forum from './pages/Forum.vue'


const routes = [
    // {path:"/", component:Login, name:'Login'},
    {path:"/", component:BookList, name:'BookList'},
    {path:"/forum", component:Forum, name:'Forum'},
    {path:"/tip", component:Tip, name:'Tip'}
]

export default new VueRouter({ 
    routes, 
    mode: 'history'
})