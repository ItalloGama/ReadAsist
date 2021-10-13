import VueRouter from 'vue-router'
import BookList from './components/Feed'
import Tip from './components/Feed'
import Forum from './components/Feed'


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