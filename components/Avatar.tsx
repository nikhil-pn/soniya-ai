import Image from 'next/image'
import React from 'react'
import Title from './Title'
import Link from 'next/link'


const Avatar = () => {
    return (
        <main className='flex justify-center items-center flex-row  mb-4 animate-pulse'>
            <div className=' w-48 h-48 md:w-[35%] md:h-[35%] rounded-full overflow-hidden  border-[3px] border-[#C194EB]'>
                <Link href="/chat">
                <Image className='h-full w-full ' src="/avatar.png" alt='avatar' width={800} height={800}></Image>
                </Link>
            </div>
        </main>
    )
}

export default Avatar