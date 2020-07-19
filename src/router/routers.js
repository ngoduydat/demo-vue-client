import Home from '../views/Home.vue';

function load(_name) {
    return () => import(/* webpackChunkName: "[main]" */ `../views/${_name}`);
}

export const routes = [
    {
        path: '/login',
        name: 'Login',
        component: load('Login'),
        meta: {
            requireAuth: false,
            title: 'Đăng nhập'
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: load('Register'),
        meta: {
            requireAuth: false,
            title: ' Đăng kí'
        }
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { requireAuth: true, title: 'Tổng quan' },
        children: [
            {
                path: 'profile',
                name: 'Profile',
                component: load('Profile'),
                meta: {
                    requireAuth: true,
                    title: 'Tổng quan'
                }
            },
            {
                path: 'user',
                name: 'User',
                component: load('User'),
                meta: {
                    requireAuth: true,
                    title: 'Tổng quan'
                }
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        component: load('About'),
        meta: {
            requireAuth: false,
            title: 'Giới thiệu'
        }
    }
];
