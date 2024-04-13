"use client";
import React, { useState } from "react";
import gsap from "gsap";
import Sidebar from "@/components/sidebar/sidebar";
import Image from "next/image";
import Search from "@/components/Search/search";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isClicked, setIsClicked] = useState(false);

  function toggleSidebarOpen() {
    setIsClicked(!isClicked); // Toggle the isClicked state first
  }

  // Run the animation when isClicked state changes
  React.useEffect(() => {
    if (isClicked) {
      gsap.from(".sidebar", { x: -500, duration: 0.5, ease: "power2.inOut" });
      gsap.to(".sidebar", {
        x: 0,
        duration: 0.75,
        delay: 0.15,
        ease: "power2.inOut",
      });
    }
  }, [isClicked]);

  return (
    <section className="relative z-0">
      <nav className="flex justify-between items-center border-b-2 py-2">
        <button
          onClick={toggleSidebarOpen}
          className="px-5 py-1 my-3 mx-5 rounded-md border-2 flex justify-center items-center border-blue-600 bg-blue-600 text-white font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 ease-in-out"
        >
          Menu
        </button>
        <div className="flex justify-between gap-3 items-center mx-5">
          <Search />
          <Image
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="object-cover rounded-full h-[50px] w-[50px]"
            alt="logo"
            width={50}
            height={50}
          />
        </div>
      </nav>
      {isClicked && <Sidebar />}
      <div
        className={isClicked ? "sidebar-opened" : "sidebar-closed"}
        style={{ margin: "10px 40px" }}
      >
        {children}
      </div>
    </section>
  );
}

export default Layout;
