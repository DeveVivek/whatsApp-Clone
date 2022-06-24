import React from "react";
import ConversationFooter from "../../components/section-componets/ConversationFooter";
import ConversationHeader from "../../components/section-componets/ConversationHeader";
import ChatMessageUI from "../ChatMessagesUI";
import "./style.views.chatConversationUI.css";

export default function ChatConversationUI() {
    return (
      <div className="portrait_view" style={{ "marginLeft": "30%" }}>
        <ConversationHeader
          profile="https://avatars.githubusercontent.com/devevivek"
          name="Vivek Kumar"
        />
        <ChatMessageUI/>
        <ConversationFooter/>
      </div>
    );
}