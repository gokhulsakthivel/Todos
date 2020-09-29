import React, { Component } from 'react';

import WbSunnySharpIcon from '@material-ui/icons/WbSunnySharp';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import FitnessCenterSharpIcon from '@material-ui/icons/FitnessCenterSharp';
import LocalGroceryStoreSharpIcon from '@material-ui/icons/LocalGroceryStoreSharp';
import ListSharpIcon from '@material-ui/icons/ListSharp';

import './Sidebaritem.css'

class Sidebaritem extends Component
{
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
        return(
            <div className="Sidebaritem">
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