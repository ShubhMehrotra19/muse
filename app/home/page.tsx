import React from 'react'
import FeedCard from './components/feedCard'

interface Props {}

function Page(props: Props) {
    const {} = props

    return (
        <section className='mx-5 overflow-hidden'>
            <section className='flex justify-between'>
            <div className='w-[20%] flex flex-col justify-start items-start px-3'>
                <div className=' flex flex-col items-start'>
                <div className="text-slate-700 text-base font-bold font-['Segoe UI'] mb-2">More Information:</div>
                <div className="pl-2 pr-10 py-2 w-full text-slate-700 text-base font-normal font-['Segoe UI'] bg-slate-500 bg-opacity-15 hover:transition-all ease-in-out cursor-pointer rounded-md hover:bg-zinc-400 hover:bg-opacity-40 mb-2 active:scale-95 select-none">👍🏽 Code of Conduct</div>
                <div className="pl-2 pr-10 py-2 w-full text-slate-700 text-base font-normal font-['Segoe UI'] bg-slate-500 bg-opacity-15 hover:transition-all ease-in-out cursor-pointer rounded-md hover:bg-zinc-400 hover:bg-opacity-40 mb-2 active:scale-95 select-none">🤓 Privacy Policy</div>
                <div className="pl-2 pr-10 py-2 w-full text-slate-700 text-base font-normal font-['Segoe UI'] bg-slate-500 bg-opacity-15 hover:transition-all ease-in-out cursor-pointer rounded-md hover:bg-zinc-400 hover:bg-opacity-40 mb-2 active:scale-95 select-none">👀 Terms of Use</div>
                <div className="pl-2 pr-10 py-2 w-full text-slate-700 text-base font-normal font-['Segoe UI'] bg-slate-500 bg-opacity-15 hover:transition-all ease-in-out cursor-pointer rounded-md hover:bg-zinc-400 hover:bg-opacity-40 mb-4 active:scale-95 select-none">🔃 Refresh feed?</div>
                </div>
                <p className=' text-slate-500 text-sm'>©️ All rights reserved</p>
            </div>
            
            <div className='w-[60%] flex flex-col px-5 py-1 items-center'>
                <div className='w-full h-[80vh] overflow-y-auto scroll-smooth flex flex-col items-center' style={{ scrollbarWidth: 'none', scrollBehavior: 'smooth' }}>
                <FeedCard />
                <FeedCard />
                <FeedCard />
                <FeedCard />
                </div>
            </div>

            </section>
        </section>
    )
}

export default Page
