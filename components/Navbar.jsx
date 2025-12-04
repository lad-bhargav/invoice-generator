import React from "react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { FileText } from "lucide-react";

const Navbar = () => {
  return (
    <div className="
      fixed top-2 left-1/2 -translate-x-1/2
      w-[50%] max-w-6xl
      h-14
      flex items-center justify-between
      px-6
      rounded-2xl

      bg-white
      shadow-lg
      z-50
    ">
      {/* Left: Title */}
      <h1 className="text-xl font-bold text-blue-950 cursor-pointer">
        <Link href="/" className="flex gap-1 justify-center items-center"><FileText />genInvoice</Link>
      </h1>

      {/* Center Links */}
      <div className="flex h-10 w-20 justify-center  hover:bg-gray-200/40 rounded-xl items-center ">
        <h2 className="text-lg font-semibold text-blue-950 cursor-pointer">
          <Link href="/">Home</Link>
        </h2>
        </div>
        <div className="flex h-10 w-20 justify-center hover:bg-gray-200/40 rounded-xl items-center">
        <h2 className="text-lg font-semibold text-blue-950 cursor-pointer">
          <Link href="/history">History</Link>
        </h2>
        </div>
        <div className="flex h-10 w-35 justify-center hover:bg-gray-200/40 rounded-xl items-center">
        <h2 className="text-lg font-semibold text-blue-950 cursor-pointer">
          <Link href="/createinvoice">Create Invoice</Link>
        </h2>
        </div>
      {/* Right: User Options */}
      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton />
          <SignUpButton>
            <button className="bg-[#6c47ff] text-white px-5 py-2 rounded-full">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
