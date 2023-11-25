"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen items-center">
        <div className="flex flex-col justify-center items-center flex-grow">
          <Image
            className="mb-4 rounded-xl"
            src="/gif.gif"
            alt="logo"
            width="200"
            height="200"
          />
          <div className="p-4 text-center font-bold">
            <h1 className="mb-1 text-2xl">Ahmad Sulaeman</h1>
            <h5 className="text-sm">InHouse Developer</h5>
          </div>
          <span className="mb-4 text-sm text-gray-500"> Contact Me </span>
          <div className="text-center">
            <Link
              className="p-3 text-blue-900"
              href="www.linkedin.com/in/ahamdsulaeman"
            >
              LinkedIn
            </Link>
            <Link
              className="p-3 text-blue-900"
              href="https://github.com/ahmadzip"
            >
              Github
            </Link>
            <Link
              className="p-3 text-blue-900"
              href="https://www.instagram.com/man.zip_/"
            >
              Instagram
            </Link>
          </div>
        </div>
        <footer className="flex h-10 items-center justify-center">
          <a
            className="flex items-center justify-center"
            href="https://www.instagram.com/man.zip_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mr-2">Made with</span>
            ❤️
            <span className="ml-2">by manzip</span>
          </a>
        </footer>
      </div>
    </>
  );
}
