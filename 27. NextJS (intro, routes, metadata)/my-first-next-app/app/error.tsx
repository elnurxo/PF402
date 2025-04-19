"use client";
import { ErrorProps } from "@/types/errorProps";

function Error({ error, reset }: ErrorProps) {
  return (
    <div>
      <h1 className="text-center text-xl text-red-500">
        <span>{error?.message || "Failed to load page..."}</span>
        <br />
        <button
          className="border-red-400 bg-red-50 mt-4 p-3 rounded shadow"
          onClick={() => reset()}
        >
          Try again
        </button>
      </h1>
    </div>
  );
}

export default Error;
