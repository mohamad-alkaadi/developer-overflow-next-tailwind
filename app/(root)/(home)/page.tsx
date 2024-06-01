import React from "react"
import { UserButton } from "@clerk/nextjs"
import Home from "@/app/page"

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}
