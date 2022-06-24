import React from "react";
import ConversationMessages from "../../components/section-componets/ConversationMessages";
import "./style.chatMessageUI.css";

export default function ChatMessageUI() {
  return (
    <div className="chat-message-ui-wrapper">
      <ConversationMessages
        message1="Hey Coder, What's up?"
        message2="Hey Coder, What's up?"
        message3="Hey Coder, What's up?"
        message4="Hey Coder, What's up?"
      />
      <ConversationMessages
        sender="Hey Coder, What's up?"
        message1="Hey Coder, What's up?"
        message2="Hey Coder, What's up?"
        message3="Hey Coder, What's up?"
        message4="Hey Coder, What's up?"
      />
    </div>
  );
}
