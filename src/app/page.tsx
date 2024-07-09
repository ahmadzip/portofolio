"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import EmojiReactions from "./_component/EmojiReactions";

export default function Home() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      <div className="flex flex-col justify-between min-h-screen items-center bg-white dark:bg-gray-900 text-black dark:text-white">
        <nav className="p-4 flex justify-between items-center w-full">
          <h1 className="text-2xl font-bold">Ahmad Sulaeman</h1>
        </nav>
        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="flex flex-col-reverse md:flex-row items-center justify-center md:space-x-8">
            <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-4xl font-bold mb-4">InHouse Developer</h2>
              <p className="text-xl mb-6">
                Passionate about creating innovative web solutions
              </p>
              <div className="space-x-4">
                <Link
                  href="https://www.linkedin.com/in/ahamdsulaeman/"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://github.com/ahmadzip"
                  className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
                >
                  GitHub
                </Link>
                <Link
                  href="https://www.instagram.com/man.zip_/"
                  className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"
                >
                  Instagram
                </Link>
              </div>
              <div className="mt-4 flex justify-center md:justify-start">
                <EmojiReactions />
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
              <Image
                src="/gif.gif"
                alt="Ahmad Sulaeman"
                width={400}
                height={400}
                className="rounded-full border-4 border-blue-500 dark:border-blue-300"
              />
            </div>
          </div>
        </main>
        <footer className="bg-gray-100 dark:bg-gray-800 py-4 text-center w-full">
          <p>© 2024 Ahmad Sulaeman. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
