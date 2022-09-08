import React from 'react';
import { AuthContext } from '../contex/AuthContext';
import { ChatContext } from '../contex/ChatContext';

const Message = ({ message }) => {
    const { currentUser } = React.useContext(AuthContext);
    const { data } = React.useContext(ChatContext);

    const ref = React.useRef();

    React.useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

    return (
        <div
            ref={ref}
            className={`message ${message.senderId === currentUser.uid && "owner"}`}
        >
            <div className="messageInfo">
                <img
                    src={
                        message.senderId === currentUser.uid
                            ? currentUser.photoURL
                            : data.user.photoURL
                    }
                    alt=""
                />
                <span>just now</span>
            </div>
            <div className="messageContent">
                <p>{message.text}</p>
                {message.img && <img src={message.img} alt="" />}
            </div>
        </div>
    );
};

export default Message;
