import { Button } from "@radix-ui/themes";
import Image from "next/image";

export const metadata = {
  title: "Home Page",
  description: "Next Home Page",
};

export default function Home() {
  return (
    <div>
      <h1 className=" text-center text-4xl my-12">Hello NextJS 👋🚀</h1>
      <Button
        style={{ display: "block", margin: "20px auto !important" }}
        variant="surface"
      >
        Let is go Radix
      </Button>

      <Image
        className="block mx-auto rounded-lg overflow-hidden hover:shadow-2xl transition duration-500"
        src={"/next-logo.jpg"}
        width={500}
        height={500}
        placeholder="blur"
        blurDataURL="/place-holder.svg"
        alt="Next.JS logo"
      />
    </div>
  );
}
