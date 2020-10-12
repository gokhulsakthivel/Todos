import React, { Component } from 'react';
import StarHalfIcon from '@material-ui/icons/StarHalf';

import './DetailBg.css'

class DetailBg extends Component{
    render()
    {
        return(
            <div className="detailbg">
                <div className="detailbg__banner">
                    <p>{this.props.text}</p>
                    <StarHalfIcon onClick={this.props.setTheme}/>
                </div>
            </div>
        )
    }
}

export default DetailBg;