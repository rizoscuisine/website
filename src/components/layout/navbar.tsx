import { useState } from "react";
import clsx from "clsx"; // Import clsx
import logo from "/logo.png";
import InstagramIcon from "../icons/instagram";
import MenuIcon from "../icons/menu";
import TikTokIcon from "../icons/tikTok";
import FacebookIcon from "../icons/facebook";
import UpArrowIcon from "../icons/uparrow";
import DownArrowIcon from "../icons/downarrow";

export default function Navbar() {
  // State to toggle the mobile menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const handleDisplayingDropdown = () => {
    setShowDropdown((prev) => !prev);
  }

  return (
    <nav className="md:p-4 md:border-b md:border-b-black w-full md:w-4/5 m-auto relative z-50 text-sm">
      <div className="flex items-center justify-between px-4 py-4 md:py-2 md:p-0 border-b-[var(--color-brown)] border-b-2 md:border-none">
        <div className="flex gap-4 place-items-center">
          <img
            src={logo}
            alt="Rizos Cuisine Logo"
            loading="lazy"
            className="w-48 h-auto"
          />
          <ul className="flex-col gap-1 w-44 hidden lg:flex" aria-label="Hours">
            <li><b>Monday - Sunday</b><br /> 7 AM - 9 PM</li>
          </ul>
        </div>
        {/* Logo or brand name */}

        {/* Navbar links (hidden on mobile) */}
        <ul className="hidden md:flex justify-between place-items-center gap-8 lg:flex-row md:flex-col">
          <div className="hidden md:flex space-x-4 text-base place-items-center">
            <li className="relative">
              <button className="hover:text-[var(--color-brown)] transition-all duration-150 flex gap-1 place-items-center cursor-pointer" onClick={handleDisplayingDropdown}>
                <p>Menu</p>
                {showDropdown ? (
                  <UpArrowIcon className="fill-transparent stroke-black w-4 h-4" />
                ) : (
                  <DownArrowIcon className="fill-transparent stroke-black w-4 h-4" />
                )}
              </button>

              {showDropdown && (
                <div className="flex flex-col gap-1 border border-[var(--color-brown)] absolute top-full mt-2 left-1/2 -translate-x-1/2 p-2 w-max text-center z-50 bg-[rgb(255_248_235)]">
                  <a className="hover:underline underline-offset-8 hover:text-[var(--color-brown)] transition-all duration-150" href="https://drive.google.com/file/d/1ngTRpPiJ4_6dBsuBi9pWLpJShMxzxWAZ/view">Breakfast & Lunch</a>
                  <a className="hover:underline underline-offset-8 hover:text-[var(--color-brown)] transition-all duration-150" href="https://drive.google.com/file/d/1TVcsEn1ZNdF_oo3wb3RZ9YTPz-W8cd6S/view">Dinner</a>
                </div>
              )}
            </li>
            <li>
              <a href="https://www.clover.com/online-ordering/rizos-cuisine-largo" className="hover:underline underline-offset-8 hover:text-[var(--color-brown)] transition-all duration-150">Order Online</a>
            </li>
          </div>

          {/* Social medias */}
          <div className="flex gap-4 place-items-center">
            <li className="group">
              <a href="https://www.instagram.com/rizoscuisine/">
                <InstagramIcon className="w-6 h-6 fill-black group-hover:fill-[var(--color-brown)] transition-all duration-150" />
              </a>
            </li>
            <li className="group">
              <a href="https://tiktok.com/@rizos.cuisine?_t=ZT-8uqttGE72Xz&_r=1">
                <TikTokIcon className="w-6 h-6 fill-black group-hover:fill-[var(--color-brown)] transition-all duration-150" />
              </a>
            </li>
            <li className="group">
              <a href="https://www.facebook.com/people/Rizos-Cuisine/61570439825645/#">
                <FacebookIcon className="w-6 h-6 fill-black group-hover:fill-[var(--color-brown)] transition-all duration-150" />
              </a>
            </li>
          </div>
        </ul>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black hover:cursor-pointer"
          >
            <MenuIcon className="w-6 h-6 stroke-black" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={clsx(
          "md:hidden bg-[rgb(255_248_235)] space-y-2 text-center border-b-2 border-b-[var(--color-brown)] w-full transition-all duration-500 ease-out absolute z-10 text-lg py-4",
          {
            block: menuOpen,
            hidden: !menuOpen,
          }
        )}
      >
        <li className="relative flex justify-center">
          <button className="hover:text-[var(--color-brown)] transition-all duration-150 flex gap-1 place-items-center cursor-pointer" onClick={handleDisplayingDropdown}>
            <p>Menu</p>
            {showDropdown ? (
              <UpArrowIcon className="fill-transparent stroke-black w-4 h-4" />
            ) : (
              <DownArrowIcon className="fill-transparent stroke-black w-4 h-4" />
            )}
          </button>

          {showDropdown && (
            <div className="flex flex-col gap-1 border border-[var(--color-brown)] absolute top-full mt-2 left-1/2 -translate-x-1/2 p-2 w-max text-center z-50 bg-[rgb(255_248_235)]">
              <a className="hover:underline underline-offset-8 hover:text-[var(--color-brown)] transition-all duration-150" href="https://drive.google.com/file/d/1ngTRpPiJ4_6dBsuBi9pWLpJShMxzxWAZ/view">Breakfast & Lunch</a>
              <a className="hover:underline underline-offset-8 hover:text-[var(--color-brown)] transition-all duration-150" href="https://drive.google.com/file/d/1TVcsEn1ZNdF_oo3wb3RZ9YTPz-W8cd6S/view">Dinner</a>
            </div>
          )}
        </li>
        <li>
          <a href="https://www.clover.com/online-ordering/rizos-cuisine-largo" className="hover:underline underline-offset-8 hover:text-[var(--color-brown)] transition-all duration-150">Order Online</a>
        </li>
        <div className="flex gap-4 justify-center pb-4">
          <li className="group">
            <a href="https://www.instagram.com/rizoscuisine/">
              <InstagramIcon className="w-6 h-6 fill-black group-hover:fill-[var(--color-brown)] transition-all duration-150" />
            </a>
          </li>
          <li className="group">
            <a href="https://tiktok.com/@rizos.cuisine?_t=ZT-8uqttGE72Xz&_r=1">
              <TikTokIcon className="w-6 h-6 fill-black group-hover:fill-[var(--color-brown)] transition-all duration-150" />
            </a>
          </li>
          <li className="group">
            <a href="https://www.facebook.com/people/Rizos-Cuisine/61570439825645/#">
              <FacebookIcon className="w-6 h-6 fill-black group-hover:fill-[var(--color-brown)] transition-all duration-150" />
            </a>
          </li>
        </div>
        <p className="font-bold text-[var(--color-brown)]">
          Hours of operation
        </p>
        <li className="text-sm"><b>Monday - Sunday</b><br /> 7 AM - 9 PM</li>
      </ul>
    </nav>
  );
}
