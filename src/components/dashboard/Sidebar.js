import React from 'react'

import './Sidebar.css'
function Sidebar() {
  return (
    <div className="Sidebar">
       <div class="logo">
    <img src="/images/trello.png" alt="logo" />
    <span>TASKPRO</span>
</div>

            <div className="menu">
                {/* Menu Option */}
                <div className="home">
                    <img src="/images/home.png" alt="" />
                    <span>Home</span>
                    </div>
                <div className="Task">
                    <img src="/images/task.png" alt="" />
                    <span>Task</span>
                    </div>
                 <div className="Team">
                    <img src="/images/team.png" alt="" />
                    <span>Team</span>
                    </div>
                <div className="Messages">
                    <img src="/images/message.png" alt="" />
                    <span>Messages</span>
                    </div>
                    {/* WorkSpaces */}
                    <div className="workspaces">
                        <div className="workhead">
                        <img src="/images/workspace.png" alt="" />
                        <span>WorkSpaces</span>
                        </div>
                        
                        <li>
                            <ul>Product Design</ul>
                            <ul>UI/UX Design</ul>
                            <ul>App Development</ul>
                            <ul>Mob Development</ul>
                        </li>
                    </div>
            </div>
            



    </div>
  )
}

export default Sidebar