import React, { Component } from 'react'

import Sidebarlist from './Sidebarlist'
// import AccountBoxSharpIcon from '@material-ui/icons/AccountBoxSharp';
import EmojiEmotionsSharpIcon from '@material-ui/icons/EmojiEmotionsSharp';

import './Sidebar.css'

class Sidebar extends Component
{
    render()
    {
        return(
            <div className="sidebar">
               <div className="sidebar__intro">
                   <EmojiEmotionsSharpIcon/>
                   <p>Hi Buddy</p>   
                </div>
                <div className="sidebar__list">
                    <Sidebarlist/>
                      
                </div>
            </div>
        )
    }
}


export default Sidebar;