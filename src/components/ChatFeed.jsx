import Messageform from "./Messageform"
import Mymessage from "./Mymessage"
import Theirmessage from "./Theirmessage"

const ChatFeed = (props) => {
    const { chats, activeChats, userName, messages } = props;
    const chat = chats && chats[activeChats];

    const renderMesseges = () => {
        const keys = Object.keys(messages);
        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessagekey = index === 0 ? null : keys[index - 1];
            const isMymessage = userName === message.sender.username;
            return (
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    <div className="message-block">
                        {
                            isMymessage
                                ? <Mymessage  message={message}/>
                                : <Theirmessage message={message} lastmessage={message[lastMessagekey]} />
                        }
                    </div>
                    <div className="read-receipts" style={{ marginRight: isMymessage ? '18px' : '0px', marginLeft: isMymessage ? '0px' : '68px' }}>
                        Read-receipts
                    </div>
                </div>
            );
        })

    }
    renderMesseges()
    if(!chat) return 'Loading....';

    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat?.title}
                  {chat.people.map((person)=>`${person.person.username}`)};
                </div>
            </div>
            {renderMesseges()}
            <div style={{height:'100px'}}  />
            <div className="message-form-container">
                <Messageform{...props} chatId={activeChats} />
            </div>
        </div>
    );
}
export default ChatFeed