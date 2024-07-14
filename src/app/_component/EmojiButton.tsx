import React from "react";

interface EmojiButtonProps {
  emoji: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
}

const EmojiButton: React.FC<EmojiButtonProps> = ({
  emoji,
  onClick,
  className,
}) => (
  <button
    onClick={onClick}
    className={`text-2xl px-4 py-2 rounded focus:outline-none ${className}`}
  >
    {emoji}
  </button>
);

export default EmojiButton;
