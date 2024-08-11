import React from "react";

const ChatList = ({ chats, selectedChat, setSelectedChat }) => {
  return (
    <div className='flex flex-col gap-4'>
      {chats?.map((chat) => (
        <div
          key={chat?._id}
          className={`flex items-center gap-4 p-3 cursor-pointer ${
            selectedChat?._id === chat?._id ? "bg-ascent-2" : "hover:bg-ascent-1"
          }`}
          onClick={() => setSelectedChat(chat)}
        >
          <img
            src={chat?.profileUrl ?? "/assets/NoProfile.png"}
            alt={chat?.name}
            className='w-10 h-10 rounded-full object-cover'
          />
          <div className='flex-1'>
            <p className='font-medium text-white'>{chat?.name}</p>
            <span className='text-sm text-ascent-2'>{chat?.lastMessage}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
