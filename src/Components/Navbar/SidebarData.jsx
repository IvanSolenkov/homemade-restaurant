import * as ImIcons from 'react-icons/im';
import * as BiIcons from 'react-icons/bi';
import * as GiIcons from 'react-icons/gi';

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
        title: 'Meat and Fish',
        path: '/meatfish',
        icon: <GiIcons.GiCirclingFish />,
        cName: 'nav-text'
    },
]