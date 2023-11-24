import Home from '~/pages/Home'
import Shop from '~/pages/Shop'
import Cart from '~/pages/Cart'
import IThinkIDo from '~/pages/IThinkIDo'
import News from '~/pages/News'
import Contact from '~/pages/Contact'
import About from '~/pages/About'
import Search from '~/pages/Search'
import CollabS from '~/pages/CollabS'
// import ContactLayout from '~/Layout/ContactLayout'
import Tops from '~/pages/Shop/components/Tops'
import Bottoms from '~/pages/Shop/components/Bottoms'
import Accessories from '~/pages/Shop/components/Accessories'
import Bags from '~/pages/Shop/components/Bags'
import Backpacks from '~/pages/Shop/components/Bags/Backpacks'
import CrossbodyBags from '~/pages/Shop/components/Bags/CrossbodyBags'
import BowlerBags from '~/pages/Shop/components/Bags/BowlerBags'
import Womenswear from '~/pages/Shop/components/Womenswear'
import Restocks from '~/pages/Shop/components/Restocks'
import Combo from '~/pages/Shop/components/Combo'
import TShirtsPolos from '~/pages/Shop/components/Tops/component/TShirtsPolos'
import Shirts from '~/pages/Shop/components/Tops/component/Shirts'
import Sweaters from '~/pages/Shop/components/Tops/component/Sweaters'
import Hoodies from '~/pages/Shop/components/Tops/component/Hoodies'
import Jackets from '~/pages/Shop/components/Tops/component/Jackets'
import Pants from '~/pages/Shop/components/Bottoms/component/Pants'
import Shorts from '~/pages/Shop/components/Bottoms/component/Shorts'
import DressesSkirts from '~/pages/Shop/components/Bottoms/component/DressesSkirts'
import OtherAccessories from '~/pages/Shop/components/Accessories/component/OtherAccessories'
import CapsHats from '~/pages/Shop/components/Accessories/component/CapsHats'
import Slides from '~/pages/Shop/components/Accessories/component/Slides'
import Wallets from '~/pages/Shop/components/Accessories/component/Wallets'
import Masks from '~/pages/Shop/components/Accessories/component/Masks'

let publicRoutes = [
    {
        path: '/',
        component: Home,
        data: 'products',
    },
    {
        path: '/cart',
        component: Cart,
        data: 'products',
    },
    {
        path: '/shop',
        component: Shop,
        data: 'products',
    },
    {
        path: '/ithinkido',
        component: IThinkIDo,
        data: 'products',
    },
    {
        path: '/contact',
        component: Contact,
        data: 'news',
    },
    {
        path: '/news',
        component: News,
        data: 'news',
    },
    {
        path: '/about',
        component: About,
        data: 'news',
    },
    {
        path: '/search',
        component: Search,
    },
    {
        path: '/collab-s',
        component: CollabS,
        data: 'products',
    },
    {
        path: '/tops',
        component: Tops,
        data: 'products',
    },
    {
        path: '/bottoms',
        component: Bottoms,
        data: 'products',
    },
    {
        path: '/accessories',
        component: Accessories,
        data: 'products',
    },
    {
        path: '/bags',
        component: Bags,
        data: 'products',
    },
    {
        path: '/womenswear',
        component: Womenswear,
        data: 'products',
    },
    {
        path: '/restocks',
        component: Restocks,
        data: 'products',
    },
    {
        path: '/combo',
        component: Combo,
        data: 'products',
    },
    {
        path: '/t-shirts-polos',
        component: TShirtsPolos,
        data: 'products',
    },
    {
        path: '/shirts',
        component: Shirts,
        data: 'products',
    },
    {
        path: '/sweaters',
        component: Sweaters,
        data: 'products',
    },
    {
        path: '/hoodies',
        component: Hoodies,
        data: 'products',
    },
    {
        path: '/jackets',
        component: Jackets,
        data: 'products',
    },
    {
        path: '/pants',
        component: Pants,
        data: 'products',
    },
    {
        path: '/shorts',
        component: Shorts,
        data: 'products',
    },
    {
        path: '/dresses-skirts',
        component: DressesSkirts,
        data: 'products',
    },
    {
        path: '/accessorires-1',
        component: OtherAccessories,
        data: 'products',
    },
    {
        path: '/caps-hats',
        component: CapsHats,
        data: 'products',
    },
    {
        path: '/slides',
        component: Slides,
        data: 'products',
    },
    {
        path: '/wallets',
        component: Wallets,
        data: 'products',
    },
    {
        path: '/masks',
        component: Masks,
        data: 'products',
    },
    {
        path: '/Backpacks',
        component: Backpacks,
        data: 'products',
    },
    {
        path: '/CrossbodyBags',
        component: CrossbodyBags,
        data: 'products',
    },
    {
        path: '/BowlerBags',
        component: BowlerBags,
        data: 'products',
    },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
