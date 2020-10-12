import React, { Children, Component } from 'react'

import {db} from '../../Services/firebase'
import Sidebarlist from './Sidebarlist'
// import AccountBoxSharpIcon from '@material-ui/icons/AccountBoxSharp';
import EmojiEmotionsSharpIcon from '@material-ui/icons/EmojiEmotionsSharp';

import './Sidebar.css'

class Sidebar extends Component
{
    state = {
        name : "Buddy"
    }

    componentDidMount(){
        this.props.changeFunction();
    }

    render()
    {
        // console.log(this.props.children)
        return(
            <div className="sidebar">
                {this.props.children}
            </div>
        )
    }
}


export default Sidebar;