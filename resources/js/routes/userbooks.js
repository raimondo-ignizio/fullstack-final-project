const userbooks = () =>import ( '../components/UserBooks.vue')

export default [
    {
        path: '/app/books',
        component: userbooks,
        name: 'userbooks',
    },
]
