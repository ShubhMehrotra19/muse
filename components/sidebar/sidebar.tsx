"use client";
import React from "react";
import gsap from "gsap";
import Link from "next/link";

function Sidebar() {
  function toggleClose() {
    gsap.from(".sidebar", { x: 0, duration: 0.5, ease: "power2.inOut" });
    gsap.to(".sidebar", {
      x: -500,
      duration: 1.25,
      delay: 0.15,
      ease: "power3.inOut",
    });
  }

  return (
    <div className="sidebar z-10 h-screen w-fit pl-8 pr-32 py-5 bg-blue-500 rounded-r-md flex flex-col justify-start items-start absolute top-0 left-0">
      <button
        onClick={toggleClose}
        type="button"
        className="px-5 py-1 border-2 border-blue-600/80 bg-blue-600/80 text-white font-semibold hover:bg-white hover:text-blue-600/80 hover:scale-[102%] hover:border-2 hover:border-blue-600/80 active:scale-95 rounded-md transition duration-300 ease-in-out mb-12"
      >
        Close
      </button>
      <div className="flex flex-col justify-start items-start gap-8 mb-60">
        <Link href="/home">
          <p className="text-white font-semibold text-xl hover:text-slate-200 hover:translate-x-2 hover:scale-[102%] transition-all duration-300 ease-in-out active:scale-95">
            Home
          </p>
        </Link>
        <Link href="#">
          <p className="text-white font-semibold text-xl hover:text-slate-200 hover:translate-x-2 hover:scale-[102%] transition-all duration-300 ease-in-out active:scale-95">
            Explore
          </p>
        </Link>
        <Link href="/dashboard">
          <p className="text-white font-semibold text-xl hover:text-slate-200 hover:translate-x-2 hover:scale-[102%] transition-all duration-300 ease-in-out active:scale-95">
            Analytics
          </p>
        </Link>
        <Link href="/profile">
          <p className="text-white font-semibold text-xl hover:text-slate-200 hover:translate-x-2 hover:scale-[102%] transition-all duration-300 ease-in-out active:scale-95">
            Profile
          </p>
        </Link>
        <Link href="#">
          <p className="text-white font-semibold text-xl hover:text-slate-200 hover:translate-x-2 hover:scale-[102%] transition-all duration-300 ease-in-out active:scale-95">
            Post
          </p>
        </Link>
        <Link href="#">
          <p className="text-white font-semibold text-xl hover:text-slate-200 hover:translate-x-2 hover:scale-[102%] transition-all duration-300 ease-in-out active:scale-95">
            Muse Website
          </p>
        </Link>
      </div>
      <button className="px-5 py-1 rounded-md text-white bg-blue-600 border-2 border-blue-600 font-semibold hover:bg-red-500 hover:border-red-500 transition ease-in-out duration-300 active:scale-95">
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
