import User from './components/user/User.vue';
import Home from './components/Home.vue';
import Carts from './components/user/Carts.vue';
import News from './components/user/News.vue';
import Product from './components/user/product.vue';

export const routes = [
	{ path:'/',component:Home },
	{ path:'/user',component:User }	,
	{ path:'/news',component:News }	,
	{ path:'/carts',component:Carts } ,
	{ path:'/product',component:Product }	
];