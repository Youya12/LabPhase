import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BiSend } from "react-icons/bi";

const MessageInput = ({ chatId }) => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleSendMessage = () => {
    if (message.trim() === "") return;
    dispatch({ type: "SEND_MESSAGE", payload: { chatId, text: message } });
    setMessage("");
  };

  return (
    <div className='w-full flex items-center gap-2'>
      <input
        type='text'
        className='flex-1 p-3 rounded-lg bg-primary text-white'
        placeholder='Type a message...'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
      />
      <button
        className='bg-ascent-1 p-3 rounded-full text-white'
        onClick={handleSendMessage}
      >
        <BiSend size={24} />
      </button>
    </div>
  );
};

export default MessageInput;
