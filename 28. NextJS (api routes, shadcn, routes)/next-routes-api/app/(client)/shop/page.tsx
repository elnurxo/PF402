"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Shop() {
  return (
    <>
      <h1 className=" mt-4.5 text-center text-4xl text-gray-800 dark:text-white">
        Shop Page!
      </h1>
      <Button variant={"outline"} className="block mx-auto mt-2.5">
        <Link href={"/auth/login"}>Start Shopping!</Link>
      </Button>
    </>
  );
}
