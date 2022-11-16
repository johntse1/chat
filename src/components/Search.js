import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type="text" placeholder='Find user'/>
      </div>
      <div className='userChat'>
        <img src="https://images.pexels.com/photos/13743846/pexels-photo-13743846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <div className='userChatInfo'>
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search