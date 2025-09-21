import { SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-bold whitespace-nowrap bg-gradient-to-r from-slate-300 via-gray-600 to-slate-400 bg-clip-text text-transparent">
            SleepTracker
          </span>
        </Link>

        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="text-gray-700 hover:text-slate-300 px-2 py-1 rounded-md text-sm sm:px-3 sm:py-2 sm:text-base font-medium hidden sm:block"
          >
            Home
          </Link>

          <Link
            href="/"
            className="text-gray-700 hover:text-slate-300 px-2 py-1 rounded-md text-sm sm:px-3 sm:py-2 sm:text-base font-medium "
          >
            About
          </Link>

          <SignInButton>
            <button className="w-full sm:w-auto bg-gradient-to-r from-slate-300 via-gray-600 to-slate-400 hover:from-blue-600 hover:via-gray-600 hover:to-blue-600 text-white sm:px-4 sm:py-2 px-3 py-1 text-sm sm:text-md rounded-md font-medium cursor-pointer">
              Sign In
            </button>
          </SignInButton>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
