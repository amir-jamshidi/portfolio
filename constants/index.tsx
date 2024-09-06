import { CiAt, CiGrid41, CiMicrochip, CiMonitor, CiUser, CiViewList } from 'react-icons/ci'

export const sidebarMenus = [
    {
        id: 1,
        title: 'Home',
        href: '/',
        icon: <CiGrid41 className='text-secondary' size={25} />
    },
    {
        id: 2,
        title: 'About Me',
        href: '/about',
        icon: <CiUser className='text-secondary' size={25} />
    },
    {
        id: 3,
        title: 'Resume',
        href: '/resume',
        icon: <CiViewList className='text-secondary' size={25} />

    },
    {
        id: 4,
        title: 'Projects',
        href: '/projects',
        icon: <CiMonitor className='text-secondary' size={25} />
    },
    {
        id: 5,
        title: 'Contact',
        href: '/contact',
        icon: <CiAt className='text-secondary' size={25} />
    },
    {
        id: 6,
        title: 'Courses',
        href: '/courses',
        icon: <CiMicrochip className='text-secondary' size={25} />
    },
]