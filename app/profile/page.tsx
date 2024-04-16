"use client"
import Image from 'next/image'
import React, { useState } from 'react'

interface Props {}

function Page(props: Props) {
    const {} = props;

    // State to store the focus state of each input
    const [inputFocusState, setInputFocusState] = useState({
        name: false,
        phoneNumber: false,
        email: false,
        password: false
    });

    // Function to update the focus state of the specified input
    const updateFocusState = (inputName: string, isFocused: boolean) => {
        setInputFocusState((prevState) => ({
            ...prevState,
            [inputName]: isFocused
        }));
    };

    // Function to refresh the page
    const refreshPage = () => {
        window.location.reload();
    };

    return (
        <section className='mx-5 overflow-hidden'>
            <section className='flex justify-between items-end'>
                <div className='w-[25%] flex flex-col justify-start items-start px-3'>
                    <div className=' flex flex-col items-start w-full'>
                        <div className="text-slate-700 text-base font-bold font-['Segoe UI'] mb-2">More Information:</div>
                        <div className="pl-5 pr-10 py-2 w-full text-slate-700 text-base font-normal font-['Segoe UI'] bg-slate-500 bg-opacity-15 hover:transition-all ease-in-out cursor-pointer rounded-md hover:bg-zinc-400 hover:bg-opacity-40 mb-2 active:scale-95 select-none">👍🏽 Code of Conduct</div>
                        <div className="pl-5 pr-10 py-2 w-full text-slate-700 text-base font-normal font-['Segoe UI'] bg-slate-500 bg-opacity-15 hover:transition-all ease-in-out cursor-pointer rounded-md hover:bg-zinc-400 hover:bg-opacity-40 mb-2 active:scale-95 select-none">🤓 Privacy Policy</div>
                        <div className="pl-5 pr-10 py-2 w-full text-slate-700 text-base font-normal font-['Segoe UI'] bg-slate-500 bg-opacity-15 hover:transition-all ease-in-out cursor-pointer rounded-md hover:bg-zinc-400 hover:bg-opacity-40 mb-2 active:scale-95 select-none">👀 Terms of Use</div>
                        <div onClick={refreshPage} className="pl-5 pr-10 py-2 w-full text-slate-700 text-base font-normal font-['Segoe UI'] bg-slate-500 bg-opacity-15 hover:transition-all ease-in-out cursor-pointer rounded-md hover:bg-zinc-400 hover:bg-opacity-40 mb-4 active:scale-95 select-none">🔃 Refresh feed?</div>
                    </div>
                    <p className=' text-slate-500 text-sm'>©️ All rights reserved</p>
                </div>
                
                <div className='flex flex-col px-5 py-2 items-center h-[84vh] w-[30%]'>
                    <div className=' border-2 border-slate-300 shadow-md rounded-md flex flex-col justify-center items-center px-4 py-1 h-full w-full'>
                        <div className='rounded-full mb-3'>
                            <Image src='https://images.pexels.com/photos/16248641/pexels-photo-16248641/free-photo-of-sunlight-over-boy-posing-with-hen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' height={250} width={250} alt='profile picture' className='rounded-full h-[250px] w-[250px] object-cover border-slate-400/40 border-2 hover:scale-[102%] transition-all duration-300 ease-in-out' />
                        </div>
                        <div className='flex flex-col justify-center items-start w-full relative mb-5'>
                            <p className={`text-xs font-semibold text-slate-400 bg-white px-1 py-[2px] ${inputFocusState.name ? 'absolute left-2 -top-2' : 'absolute left-2'}`}>Name</p>
                            <input onFocus={() => updateFocusState('name', true)} onBlur={() => updateFocusState('name', false)} className='py-2 pl-2 w-full rounded-md border-2 border-slate-500 font-medium text-base text-stone-600/90' />
                        </div>
                        <div className='flex flex-col justify-center items-start w-full relative mb-5'>
                            <p className={`text-xs font-semibold text-slate-400 bg-white px-1 py-[2px] ${inputFocusState.phoneNumber ? 'absolute left-2 -top-2' : 'absolute left-2'}`}>Phone Number</p>
                            <input onFocus={() => updateFocusState('phoneNumber', true)} onBlur={() => updateFocusState('phoneNumber', false)} className='py-2 pl-2 w-full rounded-md border-2 border-slate-500 font-medium text-base text-stone-600/90' />
                        </div>
                        <div className='flex flex-col justify-center items-start w-full relative mb-5'>
                            <p className={`text-xs font-semibold text-slate-400 bg-white px-1 py-[2px] ${inputFocusState.email ? 'absolute left-2 -top-2' : 'absolute left-2'}`}>email</p>
                            <input onFocus={() => updateFocusState('email', true)} onBlur={() => updateFocusState('email', false)} className='py-2 pl-2 w-full rounded-md border-2 border-slate-500 font-medium text-base text-stone-600/90' />
                        </div>
                        <div className='flex flex-col justify-center items-start w-full relative mb-5'>
                            <p className={`text-xs font-semibold text-slate-400 bg-white px-1 py-[2px] ${inputFocusState.password ? 'absolute left-2 -top-2' : 'absolute left-2'}`}>Password</p>
                            <input onFocus={() => updateFocusState('password', true)} onBlur={() => updateFocusState('password', false)} className='py-2 pl-2 w-full rounded-md border-2 border-slate-500 font-medium text-base text-stone-600/90' />
                        </div>
                        <div className='flex w-full justify-center gap-8 items-center'>
                        <button className='px-8 py-1 rounded-md bg-blue-500/80 text-white font-medium cursor-pointer hover:scale-[102%] hover:bg-blue-600/80 active:scale-95 transition-all duration-200 ease-in-out'>Edit</button>
                        <button className='px-5 py-1 rounded-md bg-blue-600/80 text-white font-medium cursor-pointer hover:scale-[102%] hover:bg-blue-60 active:scale-95 transition-all duration-200 ease-in-out'>Submit</button>
                    </div>
                    </div>
                </div>

                <div className='flex flex-col h-[84vh] px-5 py-2 w-[40%]'>
                    <div className='border-2 border-slate-300 shadow-md rounded-md flex flex-col justify-center items-center px-4 py-1 h-full w-full'>
                        {/* Put the post component here! */}
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Page;
