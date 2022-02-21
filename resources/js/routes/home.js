const home = () =>import ( '../components/Homepage.vue')

export default [
    {
        path: '/app',
        component: home,
        name: 'home',
    },
]
