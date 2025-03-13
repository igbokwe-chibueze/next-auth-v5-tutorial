"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import UserButton from "./UserButton";
import getSession from "@/lib/getSession";
import { signIn, useSession } from "next-auth/react";

const NavBar = () => {
  // Show the currently logged-in user
  const session = useSession()
  const user = session?.data?.user;

  return (
    <header className="sticky top-0 bg-background px-3 shadow-sm">
      <nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-3">
        <Link href="/" className="font-bold">
          Next-Auth v5 Tutorial
        </Link>

        {user && <UserButton user={user} />}
        {!user && session.status !== "loading" && <SingInButton />}
      </nav>
    </header>
  )
}

export default NavBar

function SingInButton(){
  return (
    <Button onClick={() => signIn()}>Sign in</Button>
  )
}