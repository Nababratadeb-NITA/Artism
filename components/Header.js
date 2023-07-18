import React from "react";
import { BsFillBasketFill } from "react-icons/bs";
import { HiUserCircle } from "react-icons/hi";
import Link from "next/link";

import { useStateContext } from "../context/StateContext";
import Cart from "./Cart";
import { useSession, signIn, signOut } from "next-auth/react";
import { IoMdAdd } from "react-icons/io";
import { useRouter } from "next/router";
import Image from "next/image";

function Header() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const { data: session } = useSession();
  const router = useRouter();

  // console.log(session);

  return (
    <div className="navbar-container flex items-center">
      <p className="font-extrabold text-2xl text-gray-600">
        <Link href="/">RenderHub</Link>
      </p>

      {/* Right */}
      <div className="text-black flex items-center justify-center gap-x-4 text-xs whitespace-nowrap">
        <div className="relative link flex items-center cursor-pointer">
          <IoMdAdd
            onClick={() => router.push("/createproduct")}
            className="bg-yellow-400 h-8 w-8 rounded-full"
          />
        </div>
        {/* //user profile */}
        {session ? (
          <>
            <Image
              src={
                session.user?.image ||
                "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
              }
              alt=""
              className="cursor-pointer rounded-full"
              width={34}
              height={34}
              onClick={() => signOut()}
            />
            <h1 className="font-extrabold hidden md:inline italic text-sm text-gray-500">
              {session.user?.name}
            </h1>
          </>
        ) : (
          <HiUserCircle
            className="h-10 w-10 cursor-pointer"
            onClick={() => signIn()}
          />
        )}

        {/* //cart */}
        <div
          onClick={() => setShowCart(true)}
          className="relative link flex items-center cart-icon">
          <span className="absolute top-0 ring-0 md:right-10 h-5 w-5 bg-yellow-400 text-center text-sm rounded-full text-black font-bold">
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
