import React from "react";

interface EmojiButtonProps {
  emoji: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const EmojiButton: React.FC<EmojiButtonProps> = ({ emoji, onClick }) => (
  <button
    onClick={onClick}
    className="text-2xl px-4 py-2 rounded focus:outline-none"
  >
    {emoji}
  </button>
);

export default EmojiButton;
