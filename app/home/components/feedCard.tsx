"use client"
import Image from 'next/image'
import React, { useState } from 'react'

interface Props {}

function FeedCard(props: Props) {
    const {} = props

    const [isLike, setIsLike] = useState(true);
    const [isComment, setIsComment] = useState(true);
    const [isMark, setIsMark] = useState(true);

    return (
        <>
        <div className='py-2 px-3 flex flex-col justify-center items-center h-[430px] w-[500px] bg-slate-100/20 rounded-md border-2 border-slate-300/70 shadow-sm mb-10 hover:scale-[101%] hover:shadow-md transition duration-300 ease-in-out select-none'>
            <div className='mb-5 flex w-full justify-between items-center'>
                <div className='flex justify-between gap-2 items-center cursor-pointer'>
                    <Image src='https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=400' height={56} width={56} className='rounded-full h-[56px] w-[56px] object-cover' alt='' />
                    <div className='flex flex-col justify-start items-start'>
                        <p className='text-md text-slate-800 font-semibold'>John Doe</p>
                        <p className='text-sm text-slate-600 font-medium'>@jhondoe</p>
                    </div>
                </div>
                <p className='font-semibold text-md text-slate-700'>14h ago</p>
            </div>
            <div className='mb-3 text-center'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi id porro aut enim magni, dolores hic reiciendis corporis. Quo esse incidunt officia non ratione quaerat?</p>
            </div>
            <Image className='rounded-md mb-5 w-full h-[200px] object-cover cursor-pointer' src='https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=400' height={250} width={400} alt='image' />
            <div className='flex justify-end gap-10 items-center w-full'>
                <p className='text-sm text-slate-500 font-semibold flex justify-center items-center'><Image onClick={() => {setIsComment(!isComment)}} className='h-[25px] w-[25px]' src={isComment ? '/icons/commentInitial.png' : '/icons/commentFinal.png'} height={30} width={30} alt='' /> 12</p>
                <p className='text-sm text-slate-500 font-semibold flex justify-center items-center'><Image onClick={() => {setIsLike(!isLike)}} className='h-[25px] w-[25px]' src={isLike ? '/icons/heartInitial.png' : '/icons/heartFinal.png'} height={30} width={30} alt='' /> 360</p>
                <p className='text-sm text-slate-500 font-semibold flex justify-center items-center'><Image onClick={() => {setIsMark(!isMark)}} className='h-[25px] w-[25px]' src={isMark ? '/icons/markInitial.png' : '/icons/markFinal.png'} height={30} width={30} alt='' /> 5</p>
            </div>
        </div>
        </>
    )
}

export default FeedCard
