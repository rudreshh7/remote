import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className ="header">
        <nav className="navheader">
            <div className="search">
                <img src="/images/search.png" alt="" />
                <input type="text"  placeholder = "Search task ,people , team member"/>

            </div>
            <div className="profile">
                <div className='profileicon'>
                    <img src="/images/messagen.png" alt="" />
                    <img src="/images/messagen.png" alt="" />
                    <img src="/images/help.png" alt="" />

                </div>
                <div className="profileuser">
                <img src="/images/profile.png" alt="" />

                </div>



            </div>

        </nav>
    </div>
  )
}

export default Header