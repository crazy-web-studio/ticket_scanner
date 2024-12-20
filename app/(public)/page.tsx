"use client";
import LoginForm from "@/lib/components/Login";
import Image from "next/image";
import cwsLogo from "@/lib/assets/cws-logo.svg";
import Link from "next/link";
import illuzionLogo from "@/lib/assets/illuzion-logo-light-mode.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between w-full gap-10 py-10">
      <div>
        <Image src={illuzionLogo} alt="Business logo" width={300} height={300} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-7 text-2xl font-bold">Ticket Scanner</h1>
        <LoginForm />
      </div>
      <div className="flex flex-col justify-center items-center">
        <Image src={cwsLogo} alt="Crazu Web Studio Logo" width={35} height={41} className="mb-2" />
        <span className="text-xs">Powered by</span>
        <h2 className="text-base font-medium ">Crazy Web Studio</h2>
        <Link href="https://crazywebstudio.co.th" className="hover:underline">
          Contact us
        </Link>
      </div>
    </div>
  );
}
