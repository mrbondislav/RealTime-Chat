import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='logo'>Just Chatting</span>
            <div className='user'>
                <img src="https://images.pexels.com/photos/13195312/pexels-photo-13195312.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
                <span>Julia</span>
                <button>logout</button>
            </div>
        </div>
    )
}

export default Navbar