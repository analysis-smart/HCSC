"use client"

import { ConnectButton } from "@suiet/wallet-kit";
import { profile } from "console";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <span className="py-10">HomePage</span>
      <div className="flex items-center gap-6 mb-6">
        <Link href={"/profile"} className="border p-4 rounded-md bg-pink-600 border-red-600 shadow text-white">
          Go to profile page
        </Link>
        <Link href={"/detail/?objectId=1"} className="border p-4 rounded-md bg-pink-600 border-red-600 shadow text-white">
          Go to detail page
        </Link>
        <Link href={"/callsui/?objectId=1"} className="border p-4 rounded-md bg-pink-600 border-red-600 shadow text-white">
          Go to callsui page
        </Link>
        <Link href={"/home_demo/"} className="border p-4 rounded-md bg-pink-600 border-red-600 shadow text-white">
          Go to home demo page
        </Link>
      </div>
      <ConnectButton />
    </main>
  );
}
