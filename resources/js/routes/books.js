const books = () =>import ( '../components/Books.vue')

export default [
    {
        path: '/library',
        component: books,
        name: 'books',
    },
]
