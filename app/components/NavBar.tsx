'use client'

import Link from "next/link";

const NavBar = () =>{
  return(
    <nav className="flex gap-8 justify-center items-center font-semibold p-4">
      <Link href='/'>Home</Link>
      <Link href='/shop'>Shop</Link>
      <Link href='/blog'>Blog</Link>
      <Link href='/profile'>Profile</Link>
    </nav>
  )
}

export default NavBar;
