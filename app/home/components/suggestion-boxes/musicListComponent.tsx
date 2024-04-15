import Image from 'next/image'
import React from 'react'

interface Props {}

function MusicListComponent({imgLink, songName, artistName}: any) {

    return (
        <>
        <div className='flex w-full gap-10 justify-between items-center m-1 p-1 cursor-pointer select-none'>
            <div className='flex justify-between items-center gap-2'>
            <Image src={imgLink} alt="profile" width={50} height={50} className='rounded-full object-cover h-14 w-14' />
            <div className='flex flex-col items-start justify-start'>
                <p className='font-semibold text-sm text-slate-600'>{songName}</p>
                <p className='font-medium text-xs text-slate-400 whitespace-nowrap overflow-ellipsis overflow-hidden w-28'>{artistName}</p>
            </div>
            </div>
            <button className='text-white bg-green-600 rounded-md hover:bg-green-700 active:scale-95 transition duration-200 ease-in-out px-3 py-1'>Explore</button>
        </div>
        </>
    )
}

export default MusicListComponent
