import ShowMovie from './components/showmovie.vue';
import ListMovie from './components/listmovie.vue';
import EditMovie from './components/editmovie.vue';

export default[
    {
        path: '/',
        name: 'home',
        component: ListMovie
    },{
        path: '/movie/:movie',
        component: ShowMovie,
        name: 'show'
    },{
        path: '/movie/:movie/edit',
        component: EditMovie,
        name: 'edit'
    },{
        path: '*',
        redirect: '/'
    }
]