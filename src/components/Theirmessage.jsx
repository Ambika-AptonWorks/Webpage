const Theirmessage=({lastmessage,message})=>{
    const isFirstmessagebyUser =!lastmessage || lastmessage.sender.username !== lastmessage.sender.username;
    return(
        <div className="message-row">
            { isFirstmessagebyUser && (
                <div
                className="message-avatar"
                style={{backgroundImage:`url(${message?.sender?.avatar})`}} />

            )}
            { message?.attachments?.length>0 
                    ?(
                        <img src={ message.attachments[0].file} 
                          alt="message-attachment"
                          className="message-image"
                          style={{marginLeft:'isFirstmessagebyUser' ? '4px':'48px'}} />
                    ):(
                        <div className="message" style={{float:'right',backgroundColor:'#CABCDC',marginLeft:'isFirstmessagebyUser' ? '4px':'48px'}}>
                            {message.text}
                       </div>
                    )
            }
        </div>
    )
};
export default Theirmessage