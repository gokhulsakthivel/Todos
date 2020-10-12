import React, { Component } from 'react'

// import {db} from '../../Services/firebase'
// import Sidebarlist from './Sidebarlist'
// import AccountBoxSharpIcon from '@material-ui/icons/AccountBoxSharp';
// import EmojiEmotionsSharpIcon from '@material-ui/icons/EmojiEmotionsSharp';

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
        var sidebarBG = {}
        if(!this.props.theme){
            // console.log("light")
            sidebarBG = { backgroundColor : "rgba(255,255,255,0.6)"}
            // sidebarBG = { backgroundColor : "rgba(255,255,255,0.8)",}
        }
        else{
            sidebarBG = { backgroundColor : "rgba(44,44,44,0.8)"}
        }
        return(
            <div style={sidebarBG} className="sidebar">
                {this.props.children}
            </div>
        )
    }
}


export default Sidebar;