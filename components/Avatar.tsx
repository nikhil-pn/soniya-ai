import Image from 'next/image'
import React from 'react'
import Title from './Title'


const Avatar = () => {
    return (
        <main className='flex justify-center items-center flex-row gap-4 mb-4 animate-pulse'>
            <div className=' w-48 h-48 md:w-[35%] md:h-[35%] rounded-full overflow-hidden  border-[3px] border-[#C194EB]'>
                <Image className='h-full w-full ' src="/avatar.png" alt='avatar' width={800} height={800}></Image>
            </div>
        </main>
    )
}

export default Avatar