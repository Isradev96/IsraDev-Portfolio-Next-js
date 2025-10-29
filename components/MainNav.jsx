import React from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import { MdFileDownload } from "react-icons/md";
import Link from "next/link";

const MainNav = () => {
  return (
    <nav className="w-full pt-16">
      <div className="flex flex-col h-full items-center justify-between">
        <Logo />
        <NavLinks containerStyles="flex flex-col gap-6" />
        {/* colocar enlace a mi CV */}
        <Link href="./cv/CV_Israel_Cortes.pdf" target="blank">
          <button aria-label="Download CV" className="btn btn-lg btn-tertiary mb-16">
          <div className="flex items-center gap-3">
            <span>Download CV</span>
            <MdFileDownload aria-hidden="true" className="text-xl" />
          </div>
        </button>
        </Link>
      </div>
    </nav>
  );
};

export default MainNav;
