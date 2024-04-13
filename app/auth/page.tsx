"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Page: React.FC = () => {
  const [showSecondForm, setShowSecondForm] = useState<boolean>(false);

  const toggleForm = () => {
    setShowSecondForm(!showSecondForm);
  };

  return (
    <section className="select-none">
      <div className="flex items-center overflow-hidden">
        <div className="h-screen object-cover w-1/2">
          <video
            className="h-screen object-cover w-full"
            autoPlay
            loop
            muted
            src="/video/signin_video.mp4"
          ></video>
        </div>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 w-1/2">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign in
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {showSecondForm ? (
                <>
                  Already have an account?{" "}
                  <span
                    onClick={toggleForm}
                    className="font-semibold text-black transition-all duration-200 hover:underline cursor-pointer"
                  >
                    Sign in
                  </span>
                </>
              ) : (
                <>
                  Don&apos;t have an account?{" "}
                  <span
                    onClick={toggleForm}
                    className="font-semibold text-black transition-all duration-200 hover:underline cursor-pointer"
                  >
                    Create a free account
                  </span>
                </>
              )}
            </p>
            {showSecondForm ? (
              /* Second Form */
              <div>
                <form action="#" method="POST" className="mt-8">
                  <div className="space-y-5">
                    {/* Form fields */}
                    <div>
                      <label
                        htmlFor="name"
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Full Name{" "}
                      </label>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          placeholder="Full Name"
                          id="name"
                        ></input>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Email address{" "}
                      </label>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="email"
                          placeholder="Email"
                          id="email"
                        ></input>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="password"
                          className="text-base font-medium text-gray-900"
                        >
                          {" "}
                          Password{" "}
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="password"
                          placeholder="Password"
                          id="password"
                        ></input>
                      </div>
                    </div>
                    <div>
                      <Link
                        href="/"
                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                      >
                        Create Account <ArrowRight className="ml-2" size={16} />
                      </Link>
                    </div>
                  </div>
                </form>
                <div className="mt-3 space-y-3">
                  {/* Social sign in buttons */}
                </div>
              </div>
            ) : (
              /* First Form */
              <div>
                <form action="#" method="POST" className="mt-8">
                  <div className="space-y-5">
                    {/* Form fields */}
                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Email address{" "}
                      </label>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="email"
                          placeholder="Email"
                        ></input>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor=""
                          className="text-base font-medium text-gray-900"
                        >
                          {" "}
                          Password{" "}
                        </label>
                        <a
                          href="#"
                          title=""
                          className="text-sm font-semibold text-black hover:underline"
                        >
                          {" "}
                          Forgot password?{" "}
                        </a>
                      </div>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="password"
                          placeholder="Password"
                        ></input>
                      </div>
                    </div>
                    <div>
                      <Link
                        href="/"
                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                      >
                        Get started <ArrowRight className="ml-2" size={16} />
                      </Link>
                    </div>
                  </div>
                </form>
                <div className="mt-3 space-y-3">
                  {/* Social sign in buttons */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
