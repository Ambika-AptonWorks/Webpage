import React from 'react'
import './Message.css';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './ChatFeed'

const Message=()=> {
  return (
    <ChatEngine
        height="100vh"
        projectID='7d45b667-5f3b-41db-86ac-de582474e41c'
        userName='Ambika'
        userSecret='React'
        renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
    />
  );
}

export default Message