const books = () =>import ( '../components/Books.vue')

export default [
    {
        path: '/app/library',
        component: books,
        name: 'books',
    },
]
