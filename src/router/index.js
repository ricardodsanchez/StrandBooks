/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import SignUp from '@/components/Admin/SignUp';
import Login from '@/components/Admin/Login';
import Users from '@/components/Admin/Users';
import UserDetails from '@/components/Admin/UserDetails';
import AddPost from '@/components/Admin/AddPost';
import Posts from '@/components/Admin/Posts';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/admin/users/:id',
      name: 'UserDetails',
      component: UserDetails,
      props: true
    },
    {
      path: '/admin/posts/new',
      name: 'AddPost',
      component: AddPost
    },
    {
      path: '/admin/posts',
      name: 'Posts',
      component: Posts
    }
  ]
});
