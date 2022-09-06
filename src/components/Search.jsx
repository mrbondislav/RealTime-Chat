import React from 'react'

const Search = () => {
    return (
        <div className='search'>
            <div className='searchForm'>
                <input type="text" placeholder='Find a user' />
            </div>
            <div className='userChat'>
                <img src="https://images.pexels.com/photos/13195312/pexels-photo-13195312.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
                <div className='userChatInfo'>
                    <span>Julia</span>
                </div>
            </div>
        </div>
    )
}

export default Search