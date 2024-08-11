import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Conversation, MessageInput, TopBar } from "../components";
import { conversations } from '../assets/data';


const Messages = () => {
  const { user } = useSelector((state) => state.user);
  const [activeConversation, setActiveConversation] = useState(
    conversations[0]
  );

  const handleConversationClick = (conversation) => {
    setActiveConversation(conversation);
  };

  return (
    <div className='w-full px-0 lg:px-10 pb-20 2xl:px-40 bg-bgColor lg:rounded-lg h-screen overflow-hidden'>
      <TopBar />
      <div className='w-full flex gap-2 lg:gap-4 pt-5 pb-10 h-full'>
        {/* LEFT */}
        <div className='hidden w-1/3 lg:w-1/4 h-full md:flex flex-col gap-6 overflow-y-auto bg-primary shadow-sm rounded-lg'>
          <h2 className='text-xl text-ascent-1 p-4 border-b border-[#66666645]'>
            Conversations
          </h2>
          <div className='w-full flex flex-col'>
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`p-4 cursor-pointer ${
                  activeConversation.id === conversation.id
                    ? "bg-[#0444a4] text-white"
                    : "hover:bg-[#0444a430]"
                }`}
                onClick={() => handleConversationClick(conversation)}
              >
                <Conversation
                  conversation={conversation}
                  user={user}
                  isActive={activeConversation.id === conversation.id}
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className='flex-1 h-full px-4 flex flex-col gap-6 overflow-y-auto rounded-lg'>
          {activeConversation ? (
            <>
              <div className='w-full flex items-center gap-4 p-4 bg-primary shadow-sm rounded-lg'>
                <img
                  src={activeConversation?.friend?.profileUrl ?? ""}
                  alt={activeConversation?.friend?.firstName}
                  className='w-14 h-14 rounded-full object-cover'
                />
                <div>
                  <h2 className='text-xl text-ascent-1'>
                    {activeConversation?.friend?.firstName}{" "}
                    {activeConversation?.friend?.lastName}
                  </h2>
                  <p className='text-sm text-ascent-2'>
                    {activeConversation?.friend?.status ?? "Online"}
                  </p>
                </div>
              </div>

              <div className='flex-1 flex flex-col-reverse gap-4 p-4 overflow-y-auto bg-primary shadow-sm rounded-lg'>
                {activeConversation?.messages?.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.from === user.id ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`p-3 rounded-lg text-sm ${
                        message.from === user.id
                          ? "bg-[#0444a4] text-white"
                          : "bg-[#66666630] text-ascent-1"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>

              <div className='w-full p-4 bg-primary shadow-sm rounded-lg'>
                <MessageInput conversationId={activeConversation.id} />
              </div>
            </>
          ) : (
            <div className='flex w-full h-full items-center justify-center'>
              <p className='text-lg text-ascent-2'>Select a conversation</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
