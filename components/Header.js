import React, { useState } from "react";
import { BsFillBasketFill, BsTypeH1 } from "react-icons/bs";
import Link from "next/link";

import { useStateContext } from "../context/StateContext";
import Cart from "./Cart";
import { useSession, signIn, signOut } from "next-auth/react";
import { IoMdAdd } from "react-icons/io";
import { useRouter } from "next/router";

function Header() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading")
    return (
      <p className="logo font-extrabold mx-auto text-2xl bg-yellow-400 text-black">
        ARTISM
      </p>
    );

  return (
    <div className="navbar-container flex items-center">
      <p className="logo font-extrabold">
        <Link href="/">ARTISM</Link>
      </p>

      {/* Right */}
      <div className="text-black flex items-center text-xs space-x-6 whitespace-nowrap">
        <div className="relative link flex items-center cursor-pointer">
          <IoMdAdd
            onClick={() => router.push("/createproduct")}
            className="bg-yellow-400 h-8 w-8 rounded-full"
          />
        </div>
        <div className="">
          {!session ? (
            <h1 className="font-extrabold md:text-sm link ">Please Click To</h1>
          ) : (
            <h1 className="font-extrabold italic text-sm">
              {session.user.name}
            </h1>
          )}
          <p
            onClick={session ? signOut : signIn}
            className="font-extrabold md:text-sm link cursor-pointer">
            {session ? "sign out" : "sign in"}
          </p>
        </div>

        <div
          onClick={() => setShowCart(true)}
          className=" relative link flex items-center cart-icon">
          <span className="absolute top-0 ring-0 md:right-10 h-5 w-5 bg-yellow-400 text-center rounded-full text-black font-bold">
            {totalQuantities}
          </span>
          <BsFillBasketFill className="h-10" />
          <p className="hidden md:inline font-extrabold md:text-sm mx-2 ">
            Cart
          </p>
        </div>
      </div>
      {showCart && <Cart />}
    </div>
  );
}

export default Header;
