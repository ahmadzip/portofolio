"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import io from "socket.io-client";
import EmojiButton from "./EmojiButton";
import FloatingEmoji from "./FloatingEmoji";

const socket = io(
  process.env.NEXT_PUBLIC_SOCKET_SERVER || "http://localhost:3001",
  {
    secure: true,
  }
);

const emojis = ["❤️️", "🔥", "🚀", "🤯"];

const EmojiReactions: React.FC = () => {
  const [TerbangEmojis, setTerbangEmojis] = useState<
    {
      id: number;
      emoji: string;
      x: number;
      y: number;
      hasilX: number;
      hasilY: number;
    }[]
  >([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const emojiIdRef = useRef(0);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("emojiClick", (data) => {
      const { emoji, x, y, hasilX, hasilY } = data;
      const EmojiBaru = {
        id: emojiIdRef.current++,
        emoji,
        x,
        y,
        hasilX,
        hasilY,
      };
      setTerbangEmojis((prev) => [...prev, EmojiBaru]);

      setTimeout(() => {
        setTerbangEmojis((prev) => prev.filter((e) => e.id !== EmojiBaru.id));
      }, 1000);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    return () => {
      socket.off("emojiClick");
    };
  }, []);

  const handleEmojiClick = (
    emoji: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    //jika container tidak ada, maka return
    if (!containerRef.current) return;
    //dapatkan posisi button dan container
    const buttonRect = event.currentTarget.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    //hitung posisi x dan y dari emoji
    const x = buttonRect.left - containerRect.left + buttonRect.width / 2 - 12;
    const y = buttonRect.top - containerRect.top + buttonRect.height / 2 - 12;

    //nilai random untuk offset x
    const randomXOffset = Math.random() * 100 - 50;
    const hasilX = x + randomXOffset;
    const hasilY = y - 150;

    const emojiBaru = { emoji, x, y, hasilX, hasilY };
    socket.emit("emojiClick", emojiBaru);
  };

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center space-y-4 mt-4"
    >
      <div className="flex space-x-4 bg-gray-800 p-4 rounded-full shadow-lg">
        {emojis.map((emoji) => (
          <EmojiButton
            key={emoji}
            emoji={emoji}
            onClick={(event) => handleEmojiClick(emoji, event)}
          />
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {TerbangEmojis.map((TerbangEmoji) => (
          <FloatingEmoji
            key={TerbangEmoji.id}
            emoji={TerbangEmoji.emoji}
            x={TerbangEmoji.x}
            y={TerbangEmoji.y}
            hasilX={TerbangEmoji.hasilX}
            hasilY={TerbangEmoji.hasilY}
          />
        ))}
      </div>
    </div>
  );
};

export default EmojiReactions;
