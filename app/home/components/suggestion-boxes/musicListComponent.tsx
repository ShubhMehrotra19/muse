import Image from 'next/image'
import React from 'react'

interface Props {}

function MusicListComponent(props: Props) {
    const {} = props

    return (
        <>
        <div className='flex w-full gap-10 justify-between items-center m-1 p-1 cursor-pointer'>
            <div className='flex justify-between items-center gap-2'>
            <Image src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=400" alt="profile" width={50} height={50} className='rounded-full object-cover h-14 w-14' />
            <div className='flex flex-col items-start justify-start'>
                <p className='font-semibold text-base text-slate-600'>Song Name</p>
                <p className='font-medium text-xs text-slate-400'>Artist Name</p>
            </div>
            </div>
            <button className='text-white bg-green-600 rounded-md hover:bg-green-700 active:scale-95 transition duration-200 ease-in-out px-3 py-1'>Explore</button>
        </div>
        </>
    )
}

export default MusicListComponent
