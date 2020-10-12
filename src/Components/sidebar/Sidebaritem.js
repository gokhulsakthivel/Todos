import React, { Component } from 'react';

import WbSunnySharpIcon from '@material-ui/icons/WbSunnySharp';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import FitnessCenterSharpIcon from '@material-ui/icons/FitnessCenterSharp';
import LocalGroceryStoreSharpIcon from '@material-ui/icons/LocalGroceryStoreSharp';
import ListSharpIcon from '@material-ui/icons/ListSharp';

import './Sidebaritem.css'

class Sidebaritem extends Component
{


    hoverOnEffect = (e) =>{
        if(!this.props.active && e.target.className === "Sidebaritem") {
            if(!this.props.theme){
                e.target.style.background = 'lightgray';
                // document.getElementsByClassName("Sidebaritem")[0].style.background = 'lightgray';
            }
            else{
                e.target.style.background = 'rgb(89, 89, 89)';
                // document.getElementsByClassName("Sidebaritem")[3].style.background = 'rgb(89, 89, 89)';
            }
        }
    }
    
    hoverOffEffect = (e) =>{
        if(!this.props.active) {
            if(!this.props.theme){
                e.target.style.background = 'none'; 
                document.getElementsByClassName("Sidebaritem")[this.props.index].style.backgroundColor = "none";
            }
            else{
                e.target.style.background = 'none';
                document.getElementsByClassName("Sidebaritem")[this.props.index].style.backgroundColor = "none";
            }
        }
    }

    render()
    {
        // iconName = this
        // const icon = this.props.icon;
        var r = Math.floor((Math.random() * 255) + 1);
        var g = Math.floor((Math.random() * 255) + 1);
        var b = Math.floor((Math.random() * 255) + 1);
        const style = {
            color : 'rgb('+r+','+g+','+b+')'
        }
        var act = {}; 
        if(this.props.active) {
            if(!this.props.theme){
                act = {
                    backgroundColor : "lightgray",    
                }
            }
            else{
                act = {
                    backgroundColor : " rgb(89, 89, 89)",    
                }
            }
            
        }

        // console.log(this.props.index,"sidebarItem");
        
        return(
            <div className="Sidebaritem" 
                onMouseEnter={this.hoverOnEffect}  
                onMouseLeave={this.hoverOffEffect}      
                style={act} 
                onClick={this.props.activeFunction}
            >
                <div className="sidebaritem__left">
                    {
                        this.props.icon === 'WbSunnySharpIcon' ? <WbSunnySharpIcon style={style}/> :
                        this.props.icon === 'HomeSharpIcon' ? <HomeSharpIcon style={style}/> :
                        this.props.icon === 'FitnessCenterSharpIcon' ? <FitnessCenterSharpIcon style={style}/> :
                        this.props.icon === 'LocalGroceryStoreSharpIcon' ? <LocalGroceryStoreSharpIcon style={style}/> :
                        <ListSharpIcon style={style}/>
                    }
                    <p>{this.props.name}</p>
                    {/* <p>{this.props.count}</p> */}
                </div>
                <div className="sidebaritem__right">
                    {
                        // this.props.count === '0' ? null :
                        <p>{this.props.count}</p>
                    }
                    
                </div>
                
            </div>
        )
    }
}

export default Sidebaritem;