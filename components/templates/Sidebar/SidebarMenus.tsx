'use client'

import { sidebarMenus } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
const SidebarMenus = () => {

    const pathName = usePathname();

    return (
        <>
            {
                sidebarMenus.map(menu => (
                    <div key={menu.id} className={`w-full rounded-md dark:hover:bg-gray-700 hover:bg-gray-100 transition-all ${clsx({ 'bg-gray-100 dark:bg-gray-700': pathName === menu.href })}`}>
                        <Link href={`${menu.href}`} className='flex items-center gap-x-1.5 py-2.5 px-2'>
                            <span>
                                {menu.icon}
                            </span>
                            <p className='text-secondary'>{menu.title}</p>
                        </Link>
                    </div>
                ))
            }
        </>
    )
}

export default SidebarMenus