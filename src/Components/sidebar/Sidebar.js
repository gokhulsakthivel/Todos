import React, { Component } from 'react'

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
        var tempName = "";
        db.collection("users").doc("iNIR1xqLjNNqpzMkuRJO")
            .get()
            .then(snapshot => {
                tempName = (snapshot.data().Name);
                console.log(tempName)
                if(tempName !== ""){
                    this.setState({
                        name : tempName
                    });
                }
                
            })
        this.props.changeFunction();
    }

    render()
    {
        return(
            <div className="sidebar">
               <div className="sidebar__intro">
                   <EmojiEmotionsSharpIcon/>
                   {/* <p>Hi Buddy</p>    */}
                    <p>Hi {this.state.name}</p>
                </div>
                <div className="sidebar__list">
                    <Sidebarlist array={this.props.array} changeFunction={this.props.changeFunction}/>
                </div>
            </div>
        )
    }
}


export default Sidebar;