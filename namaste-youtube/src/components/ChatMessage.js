import React from "react";

const ChatMessage = ({ messages }) => {
  const { name, text } = messages;
  return (
    <div className="flex items-center ">
      <img
        className="h-8"
        alt="user_logo"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <span className="font-bold px-4">{name}</span>
      <span className="">{text}</span>
    </div>
  );
};

export default ChatMessage;
