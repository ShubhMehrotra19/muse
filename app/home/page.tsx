import React from 'react'
import FeedCard from './components/feedCard'
import FriendSuggestion from './components/suggestion-boxes/friendSuggestion'
import MusicSuggestion from './components/suggestion-boxes/musicSuggestion'

interface Props {}

function Page(props: Props) {
    const {} = props

    return (
        <section className='mx-5 overflow-hidden'>
            <section className='flex justify-between items-end'>
            <div className='w-[25%] flex flex-col justify-start items-start px-3'>
                <div className=' flex flex-col items-start w-full'>
                <div className="text-slate-700 text-base font-bold font-['Segoe UI'] mb-2">More Information:</div>
                <div className="pl-5 pr-10 py-2 w-full text-slate-700 text-base font-normal font-['Segoe UI'] bg-slate-500 bg-opacity-15 hover:transition-all ease-in-out cursor-pointer rounded-md hover:bg-zinc-400 hover:bg-opacity-40 mb-2 active:scale-95 select-none">👍🏽 Code of Conduct</div>
                <div className="pl-5 pr-10 py-2 w-full text-slate-700 text-base font-normal font-['Segoe UI'] bg-slate-500 bg-opacity-15 hover:transition-all ease-in-out cursor-pointer rounded-md hover:bg-zinc-400 hover:bg-opacity-40 mb-2 active:scale-95 select-none">🤓 Privacy Policy</div>
                <div className="pl-5 pr-10 py-2 w-full text-slate-700 text-base font-normal font-['Segoe UI'] bg-slate-500 bg-opacity-15 hover:transition-all ease-in-out cursor-pointer rounded-md hover:bg-zinc-400 hover:bg-opacity-40 mb-2 active:scale-95 select-none">👀 Terms of Use</div>
                <div className="pl-5 pr-10 py-2 w-full text-slate-700 text-base font-normal font-['Segoe UI'] bg-slate-500 bg-opacity-15 hover:transition-all ease-in-out cursor-pointer rounded-md hover:bg-zinc-400 hover:bg-opacity-40 mb-4 active:scale-95 select-none">🔃 Refresh feed?</div>
                </div>
                <p className=' text-slate-500 text-sm'>©️ All rights reserved</p>
            </div>
            
            <div className='flex flex-col px-5 py-2 items-center w-[50%]'>
                <div className='w-full h-[84vh] overflow-y-auto scroll-smooth flex flex-col items-center' style={{ scrollbarWidth: 'none', scrollBehavior: 'smooth' }}>
                <FeedCard />
                <FeedCard />
                <FeedCard />
                <FeedCard />
                </div>
            </div>

            <div className='flex flex-col h-[84vh] my-auto justify-between w-[25%]'>
                <FriendSuggestion />
                <MusicSuggestion />
            </div>
            </section>
        </section>
    )
}

export default Page
