import Image from 'next/image'
import SidebarMenus from './SidebarMenus'
import { CiPenpot } from 'react-icons/ci'
const Sidebar = () => {
    return (
        <aside className='w-full h-full flex justify-center items-center px-6 py-8'>
            <div className='flex flex-col justify-between items-center gap-y-1 w-full h-full'>
                <div className='space-y-1.5 flex flex-col items-center'>
                    <div className='rounded-full border border-gray-300 dark:border-gray-600 overflow-hidden relative h-36 w-36'>
                        <Image className='object-contain p-1 rounded-full' src={'/profile.jpg'} alt='Avatar' fill />
                    </div>
                    <div className=''>
                        <p className='text-secondary'>Amir Hossein Jamshidi</p>
                        <div className='flex gap-x-1 items-center justify-center'>
                            <span className='dot-small bg-blue-500 flex w-2 h-2 rounded-full'></span>
                            <p className='text-light text-sm'>Fullstack Developer</p>
                            <span className='dot-small bg-blue-500 flex w-2 h-2 rounded-full'></span>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-y-1'>
                    <SidebarMenus />
                </div>
                <div className='h-16 flex flex-col justify-end text-xs text-light'>
                    <div className='flex items-center gap-x-0.5'>
                        <span>
                            <CiPenpot size={20} className='text-blue-500' />
                        </span>
                        <p>Design : Amir (Me)</p>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar