import React from 'react';

const Conversation = ({ conversation, user, isActive }) => {
    if (!conversation) {
        return <div>No conversation available.</div>;
    }

    return (
        <div className={`conversation-container ${isActive ? 'active' : ''}`}>
            <h3 className="text-xl font-bold">{conversation.title}</h3>
            <div className="messages flex flex-col gap-2">
                {conversation.messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${
                            message.senderId === user.id ? 'justify-end' : 'justify-start'
                        }`}
                    >
                        <div
                            className={`p-3 rounded-lg text-sm max-w-xs break-words ${
                                message.senderId === user.id
                                    ? 'bg-[#0444a4] text-white rounded-br-none'
                                    : 'bg-[#66666630] text-ascent-1 rounded-bl-none'
                            }`}
                        >
                            {message.message}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Conversation;
