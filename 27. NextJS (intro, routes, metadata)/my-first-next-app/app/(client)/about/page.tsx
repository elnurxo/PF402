// "use client";
// import { useRouter } from "next/navigation";

import Link from "next/link";

function About() {
  // const router = useRouter();
  const randomNumber = Math.floor(Math.random() * 10);

  if (randomNumber === 3) {
    throw new Error("Code Academy Error!");
  }
  return (
    <div>
      <h1 className="text-center text-4xl my-12">About Page NextJS 🚀</h1>
      <button
        // onClick={() => {
        //   router.push(`/about/${randomNumber}`);
        // }}
        className="block mx-auto my-4 rounded hover:shadow transition duration-500 bg-blue-500 text-white px-4 py-2 cursor-pointer"
      >
        <Link href={`/about/${randomNumber}`}>detail for about</Link>
      </button>
    </div>
  );
}

export default About;
