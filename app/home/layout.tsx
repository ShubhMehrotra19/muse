import Sidebar from '@/components/sidebar/sidebar'
import React from 'react'

function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    return (
        <section className='flex justify-between items-center'>
            <div className="w-[40%]">
                <Sidebar />
            </div>
            <div>
                {children}
            </div>
        </section>
    )
}

export default Layout
