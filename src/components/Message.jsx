import React from 'react'

const Message = () => {
    return (
        <div className='message owner'>
            <div className="messageInfo">
                <img src="https://images.pexels.com/photos/13195312/pexels-photo-13195312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <span>just now</span>
            </div>
            <div className="messageContent">
                <p>hello</p>
                <img src="https://images.pexels.com/photos/13195312/pexels-photo-13195312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
        </div>
    )
}

export default Message