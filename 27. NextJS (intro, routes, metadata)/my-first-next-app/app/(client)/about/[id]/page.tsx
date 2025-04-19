// "use client";
// import { useRouter } from "next/navigation";

import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const { id } = params;
  return {
    title: `Detail for ${id}`,
  };
}

function About({ params }: Props) {
  // const router = useRouter();
  const { id } = params;
  return (
    <div>
      <h1 className="text-center text-4xl my-12">
        About Detail Page with {id} NextJS 🚀
      </h1>
      <button className="block mx-auto my-4 rounded hover:shadow transition duration-500 bg-blue-500 text-white px-4 py-2 cursor-pointer">
        <Link href={"/about"}>go back</Link>
      </button>
    </div>
  );
}

export default About;
