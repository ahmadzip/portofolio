"use client";

import Image from "next/image";
import Link from "next/link";
import EmojiReactions from "./_component/EmojiReactions";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen items-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <nav className="p-4 flex justify-between items-center w-full shadow-md bg-gray-50 dark:bg-gray-800">
        <h1 className="text-2xl font-bold">Ahmad Sulaeman</h1>
      </nav>

      <main className="container mx-auto px-4 py-8 max-w-5xl overflow-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center md:space-x-8">
          <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">InHouse Developer</h2>
            <p className="text-xl mb-6">
              Passionate about creating innovative web solutions
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
              <Link
                href="https://www.linkedin.com/in/ahamdsulaeman/"
                className="flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                <FaLinkedin className="mr-2" />
                LinkedIn
              </Link>
              <Link
                href="https://github.com/ahmadzip"
                className="flex items-center justify-center px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                <FaGithub className="mr-2" />
                GitHub
              </Link>
              <Link
                href="https://www.instagram.com/man.zip_/"
                className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                <FaInstagram className="mr-2" />
                Instagram
              </Link>
            </div>
            <div className="flex justify-center md:justify-start">
              <EmojiReactions />
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0 overflow-hidden">
            <div className="max-w-xs mx-auto md:max-w-full transform transition duration-300 hover:scale-105">
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                <Image
                  src="/gif.gif"
                  alt="Ahmad Sulaeman"
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="rounded-full border-4 border-blue-500 dark:border-blue-300 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 dark:bg-gray-800 py-4 text-center w-full border-t border-gray-200 dark:border-gray-700 shadow-inner">
        <p>
          Made with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by{" "}
          <Link
            href="https://www.instagram.com/man.zip_/"
            className="text-blue-500 hover:underline"
          >
            manzip
          </Link>
        </p>
      </footer>
    </div>
  );
}
