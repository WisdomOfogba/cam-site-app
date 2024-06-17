"use client";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import MenuButton from "./MenuButton";
import { useState } from "react";

type MenuProps = {
  onClose: () => void;
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex ">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <div className=" lg:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? "close.svg" : "menu.svg"}
          alt="menu"
          className={`${
            toggle ? "fixed" : "absolute"
          } w-[28px] h-[28px] object-contain z-20 cursor-pointer`}
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } h-full flex-col gap-6 lg:hidden bg-green-50 items-center top-0 right-0 w-80 z-10 fixed`}
        >
          <ul className="flex flex-col w-full mt-20">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className=" regular-16 text-white flexCenter cursor-pointer p-2 transition-all hover:font-bold"
                onClick={() => setToggle((prev) => !prev)}
              >
                {link.label}
              </Link>
            ))}
          </ul>
          <div className="flexCenter lg:hidden">
            <Button
              type="button"
              title="Login"
              icon="/user.svg"
              variant="btn_dark_green"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
