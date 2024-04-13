"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Search() {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: any) {
      const searchInput = document.querySelector(".search");
      if (searchInput && !searchInput.contains(event.target)) {
        setIsClicked(false);
        gsap.to(".search", {
          height: "40px",
          width: "40px",
          duration: 0.5,
          ease: "power3.inOut",
        });
      }
    }

    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  function toggleSearchClick() {
    setIsClicked(!isClicked);
    if (!isClicked) {
      gsap.from(".search", { height: "40px", width: "40px", duration: 0.5 });
      gsap.to(".search", {
        height: "40px",
        width: "300px",
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  }

  return (
    <>
      <div className="relative cursor-pointer">
        <input
          type="search"
          className={`search pl-[36px] rounded-full flex justify-center items-center border-2 p-1 h-[40px] w-[40px] ${
            isClicked ? "focus" : "Search-pointer"
          }`}
          placeholder="Search.."
        />
        <Image
          src="/icons/search.png"
          onClick={toggleSearchClick}
          alt=""
          height={30}
          width={30}
          className="absolute top-1/2 transform -translate-y-1/2 left-[8px] Search-pointer"
        />
      </div>
    </>
  );
}
