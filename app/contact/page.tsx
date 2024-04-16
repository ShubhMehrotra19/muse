import React from 'react'

interface Props {}

function Page(props: Props) {
    const {} = props

    return (
        <section className="w-full bg-white select-none">

    <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row">
            <div className="relative w-full bg-cover lg:w-6/12 xl:w-7/12 bg-gradient-to-r from-white via-white to-gray-100">
                <div className="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
                    <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                        <div className="relative">
                            <p className="mb-2 font-medium text-gray-700 uppercase">Listen with Muse</p>
                            <h2 className="text-5xl font-bold text-gray-900 xl:text-6xl">We make your listening experience better</h2>
                        </div>
                        <p className="text-2xl text-gray-700">We&apos;ve created a minimalistic but innovative way for keeping your music listening experience awesome!</p>
                        <a href="/home" className="inline-block px-8 py-5 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease" data-primary="blue-600" data-rounded="rounded-lg">Go Back</a>
                    </div>
                </div>
            </div>

            <div className="w-full bg-white lg:w-6/12 xl:w-5/12">
                <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
                    
                    <div className="relative w-full mt-10 space-y-8">
                        <div className="relative">
                            <label className="font-medium text-gray-900">Name</label>
                            <input type="text" className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" data-primary="blue-600" data-rounded="rounded-lg" placeholder="Enter Your Name" />
                        </div>
                        <div className="relative">
                            <label className="font-medium text-gray-900">Email</label>
                            <input type="text" className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" data-primary="blue-600" data-rounded="rounded-lg" placeholder="Enter Your Email Address" />
                        </div>
                        <div className="relative">
                            <label className="font-medium text-gray-900">Your Concern</label>
                            <input type="text" className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" data-primary="blue-600" data-rounded="rounded-lg" placeholder="Enter your concern" />
                        </div>
                        <div className="relative">
                            <div className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease active:scale-95" data-primary="blue-600" data-rounded="rounded-lg">Submit</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>

    )
}

export default Page
