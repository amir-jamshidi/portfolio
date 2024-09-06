import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='h-14 bg-gray-800 rounded-md justify-between mt-4 md:mx-4 border-dark items-center flex px-2'>
            <div className='w-20 flex'>
                <div className='rounded-full overflow-hidden border-dark'>
                    <Image
                        className='p-0.5 rounded-full'
                        src='/profile.jpg'
                        width={44}
                        height={44}
                        alt='Profile' />
                </div>
            </div>
            <div>
                <p className='font-semibold text-xl text-primary'>DevAmir</p>
            </div>
            <div className='w-20'></div>
        </div>
    )
}

export default Header