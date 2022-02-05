const userbooks = () =>import ( '../components/UserBooks.vue')

export default [
    {
        path: '/books',
        component: userbooks,
        name: 'userbooks',
    },
]
