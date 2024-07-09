"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

interface EmojiProps {
  label?: string;
  symbol: string;
}
interface EmojiButtonProps {
  emoji: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
interface FloatingEmojiProps {
  emoji: string;
  x: number;
  y: number;
  finalX: number;
  finalY: number;
}

const emojis = ["❤️️", "🔥", "🚀", "🤯"];

const EmojiButton: React.FC<EmojiButtonProps> = ({ emoji, onClick }) => (
  <button
    onClick={onClick}
    className="text-2xl px-4 py-2 rounded focus:outline-none"
  >
    {emoji}
  </button>
);

const FloatingEmoji: React.FC<FloatingEmojiProps> = ({
  emoji,
  x,
  y,
  finalX,
  finalY,
}) => (
  <motion.div
    initial={{ opacity: 1, x: x, y: y }}
    animate={{ opacity: 0, x: finalX, y: finalY }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="absolute text-2xl"
  >
    {emoji}
  </motion.div>
);

const EmojiReactions: React.FC = () => {
  const [floatingEmojis, setFloatingEmojis] = useState<
    {
      id: number;
      emoji: string;
      x: number;
      y: number;
      finalX: number;
      finalY: number;
    }[]
  >([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const emojiIdRef = useRef(0);

  const handleEmojiClick = (
    emoji: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!containerRef.current) return;

    const buttonRect = event.currentTarget.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const x = buttonRect.left - containerRect.left + buttonRect.width / 2 - 12;
    const y = buttonRect.top - containerRect.top + buttonRect.height / 2 - 12;

    // Generate random final positions
    const randomXOffset = Math.random() * 100 - 50;
    const finalX = x + randomXOffset;
    const finalY = y - 150;

    const newEmoji = { id: emojiIdRef.current++, emoji, x, y, finalX, finalY };
    setFloatingEmojis((prev) => [...prev, newEmoji]);

    setTimeout(() => {
      setFloatingEmojis((prev) => prev.filter((e) => e.id !== newEmoji.id));
    }, 1000);
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
        {floatingEmojis.map((floatingEmoji) => (
          <FloatingEmoji
            key={floatingEmoji.id}
            emoji={floatingEmoji.emoji}
            x={floatingEmoji.x}
            y={floatingEmoji.y}
            finalX={floatingEmoji.finalX}
            finalY={floatingEmoji.finalY}
          />
        ))}
      </div>
    </div>
  );
};

export default EmojiReactions;
