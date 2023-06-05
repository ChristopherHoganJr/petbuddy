import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full px-5 flex justify-between items-center h-20">
      <div>Pet Buddy</div>
      <ul className="flex gap-5">
        <li>
          <Link href={"/mission"}>Mission</Link>
        </li>
        <li>
          <Link href={""}>Sign In</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
