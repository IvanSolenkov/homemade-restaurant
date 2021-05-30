import * as ImIcons from 'react-icons/im';
import * as BiIcons from 'react-icons/bi';
import * as GiIcons from 'react-icons/gi';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <ImIcons.ImHome />,
        cName: 'nav-text'
    },
    {
        title: 'Menu',
        path: '/menu',
        icon: <BiIcons.BiFoodMenu />,
        cName: 'nav-text'
    },
    {
        title: 'Cooking',
        path: '/cooking',
        icon: <GiIcons.GiCookingPot />,
        cName: 'nav-text'
    },
    {
        title: 'Asian Food',
        path: '/asianfood',
        icon: <GiIcons.GiMeatCleaver />,
        cName: 'nav-text'
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaIcons.FaProductHunt />,
        cName: 'nav-text'
    },
    {
        title: 'Fresh Food',
        path: '/freshfood',
        icon: <SiIcons.SiIfood />,
        cName: 'nav-text'
    },
]