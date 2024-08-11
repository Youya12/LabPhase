import React from "react";

const ChatWindow = ({ chat, user }) => {
  return (
    <div className='flex flex-col gap-4 overflow-y-auto'>
      {chat?.messages?.map((message) => (
        <div
          key={message?._id}
          className={`flex ${
            message?.senderId === user?._id ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`max-w-xs px-4 py-2 rounded-lg ${
              message?.senderId === user?._id ? "bg-ascent-1 text-white" : "bg-primary text-black"
            }`}
          >
            <p className='text-sm'>{message?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
