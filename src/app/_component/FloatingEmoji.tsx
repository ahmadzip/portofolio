import React from "react";
import { motion } from "framer-motion";

interface FloatingEmojiProps {
  emoji: string;
  x: number;
  y: number;
  hasilX: number;
  hasilY: number;
}

const FloatingEmoji: React.FC<FloatingEmojiProps> = ({
  emoji,
  x,
  y,
  hasilX,
  hasilY,
}) => (
  <motion.div
    initial={{ opacity: 1, x: x, y: y }}
    animate={{ opacity: 0, x: hasilX, y: hasilY }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="absolute text-2xl"
  >
    {emoji}
  </motion.div>
);

export default FloatingEmoji;
