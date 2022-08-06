import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { GiWoodAxe } from "react-icons/gi";
import { Link, animateScroll as scroll } from "react-scroll";
export default function Header() {
  const [isNavOpen, setNavOpen] = useState(false);

  const [home, setHome] = useState(true);
  const list = [
    ["Home", "/", true],
    ["About", "/about", false],

    ["FAQs", "/faqs", false],
  ];

  const sessionList = [
    ["Dashboard", "/dashboard", true],
    ["Profile", "/profile", true],
  ];
  const router = useRouter();
  useEffect(() => {
    setNavOpen(false);
    if (router.pathname === "/") {
      return setHome(true);
    }
    setHome(false);
  }, [router]);
  return (
    <div className="fixed top-0 z-20">
      <div className=" p-4 md:px-16 md:py-8 flex w-screen items-center justify-between bg-[#1a1a1a] h-16 border-b-[0.1px] border-solid border-b-slate-700">
        <h3 className="font-[Orbitron] text-white font-bold text-4xl">
          Athenasoft
        </h3>

        <ul className="  md:justify-between  md:flex hidden">
          {" "}
          {list.map(([name, link], index) => (
            <Link
              className="m-2 text-gray-50  cursor-pointer hover:text-blue-400"
              key={index}
              activeClass="active"
              to={"Home"}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {name}
            </Link>
          ))}
        </ul>

        <button
          className="md:hidden relative  p-2 outline-none after:rounded-full  text-white "
          onClick={() => setNavOpen(!isNavOpen)}
        >
          {(isNavOpen && <AiOutlineClose size={40} />) || (
            <RiMenu4Line size={40} />
          )}
        </button>
      </div>
      <div
        className={`md:hidden overflow-hidden w-screen py-5 p-2 flex flex-col bg-gray-800  items-start justify-center transition-max-height ease-out duration-500 ${
          (isNavOpen && " max-h-96") || "max-h-0 py-0 p-0"
        }`}
      >
        <ul className="flex flex-col">
          {list.map(
            ([name, link], index) =>
              (home && (
                <Link
                  className={`mt-2 pl-2 text-gray-50 m-1 font-light text-xl hover:scale-105`}
                  key={index}
                  onClick={() => setNavOpen(false)}
                  activeClass="mobile-active"
                  to={"Home"}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {name}
                </Link>
              )) || (
                <li
                  className={`mt-2 pl-2 text-gray-50 m-1 font-light text-xl hover:scale-105`}
                  key={index}
                  onClick={() => router.push("/")}
                >
                  {name}
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
}
