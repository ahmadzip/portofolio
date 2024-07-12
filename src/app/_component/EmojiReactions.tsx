"use client";

import { useState, useRef, useEffect } from "react";
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
  const [floatingEmojis, setFloatingEmojis] = useState<
    {
      id: number;
      emoji: string;
      x: number;
      y: number;
    }[]
  >([]);
  const [buttonPositions, setButtonPositions] = useState<
    { x: number; y: number }[]
  >([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const emojiIdRef = useRef(0);

  useEffect(() => {
    const posisi = () => {
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const buttons = Array.from(
          containerRef.current.querySelectorAll("button")
        );
        const positions = buttons.map((button) => {
          const buttonRect = button.getBoundingClientRect();
          const x =
            buttonRect.left - containerRect.left + buttonRect.width / 2 - 14;
          const y =
            buttonRect.top - containerRect.top + buttonRect.height / 2 - 30;
          return { x, y };
        });
        setButtonPositions(positions);
      }
    };

    posisi();

    socket.on("connect", () => {
      console.log("Anda terhubung ke server");
    });

    socket.on("emojiClick", (data) => {
      const { emojiIndex } = data;
      const position = buttonPositions[emojiIndex];
      const EmojiNew = {
        id: emojiIdRef.current++,
        emoji: emojis[emojiIndex],
        x: position.x,
        y: position.y,
      };
      setFloatingEmojis((prev) => [...prev, EmojiNew]);

      setTimeout(() => {
        setFloatingEmojis((prev) => prev.filter((e) => e.id !== EmojiNew.id));
      }, 1000);
    });

    socket.on("disconnect", () => {
      console.log("Anda terputus dari server");
    });

    return () => {
      socket.off("emojiClick");
    };
  }, [buttonPositions]);

  const ClickEmoji = (
    emojiIndex: number,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    socket.emit("emojiClick", { emojiIndex });
  };

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center space-y-4 mt-4"
    >
      <div className="flex space-x-4 dark:bg-gray-800 bg-gray-50 p-4 rounded-full shadow-xl">
        {emojis.map((emoji, index) => (
          <EmojiButton
            key={emoji}
            emoji={emoji}
            onClick={(event) => ClickEmoji(index, event)}
          />
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {floatingEmojis.map((floatingEmoji) => (
          <FloatingEmoji
            key={floatingEmoji.id}
            emoji={floatingEmoji.emoji}
            x={floatingEmoji.x}
            y={floatingEmoji.y}
          />
        ))}
      </div>
      <span className="text-xs text-gray-500 dark:text-gray-400 text-center">
        Click an emoji to send it flying!
        <br />
        *btw this is real-time :)
      </span>
    </div>
  );
};

export default EmojiReactions;
