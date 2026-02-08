"use client";

import { ConnectButton } from "@suiet/wallet-kit";
import { profile } from "console";
import Link from "next/link";
import { Icons } from "~/components/icons";
import HOME_BG from "../../../../public/home_bg.png";
import { Logo } from "~/components/logo";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden flex min-h-screen flex-col items-center bg-[#1B1AFF] text-white">
      <div className="container z-10 flex items-center justify-between border px-10 py-4">
        <Logo />
        <ConnectButton className="!p-0">
          <div className="h-full w-full rounded-md bg-white p-4 capitalize tracking-wide text-black">
            <span className="hidden md:block">connect wallet</span>
            <span className="block md:hidden">connect</span>
          </div>
        </ConnectButton>
      </div>
      <div className="absolute -right-4 top-0 lg:-top-20 h-full w-full flex justify-end">
        <Icons.home_bg className="hidden lg:block h-full w-full max-w-[80vw] " />
      </div>
    </main>
  );
}
