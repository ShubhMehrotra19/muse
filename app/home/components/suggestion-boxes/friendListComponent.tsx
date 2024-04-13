import Image from 'next/image'
import React from 'react'

interface Props {}

function FriendListComponent(props: Props) {
    const {} = props

    return (
        <>
        <div className='flex w-full gap-10 justify-between items-center m-1 p-1 cursor-pointer'>
            <div className='flex justify-between items-center gap-2'>
            <Image src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=400" alt="profile" width={50} height={50} className='rounded-full object-cover h-14 w-14' />
            <div className='flex flex-col items-start justify-start'>
                <p className='font-semibold text-base text-slate-600'>Jane Doeh</p>
                <p className='font-semibold text-sm text-slate-400'>@janedoeh</p>
            </div>
            </div>
            <button className='text-white bg-blue-600 rounded-md hover:bg-blue-700 active:scale-95 transition duration-200 ease-in-out px-3 py-1'>Follow</button>
        </div>
        </>
    )
}

export default FriendListComponent
