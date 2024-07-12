"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingEmojiProps {
  emoji: string;
  x: number;
  y: number;
}

const FloatingEmoji: React.FC<FloatingEmojiProps> = ({ emoji, x, y }) => {
  const [randomX, setRandomX] = useState(0);

  useEffect(() => {
    setRandomX(Math.random() * 100 - 50);
  }, []);

  return (
    <motion.div
      initial={{ x, y }}
      animate={{
        x: [x, x + randomX, x - randomX, x],
        y: y - 700,
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className="absolute text-2xl"
    >
      {emoji}
    </motion.div>
  );
};

export default FloatingEmoji;
