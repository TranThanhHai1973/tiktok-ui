import { HeaderOnly } from '~/Componments/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/follwing', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
    { path: '/@:nickname', component: Profile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
