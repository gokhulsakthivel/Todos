import React, { Component } from 'react';
import StarHalfIcon from '@material-ui/icons/StarHalf';

import './DetailBg.css'

class DetailBg extends Component{
    render()
    {
        return(
            <div className="detailbg">
                <div className="detailbg__banner">
                    <p>To-Do</p>
                    <StarHalfIcon/>
                </div>
                <div className="">
                </div>
            </div>
        )
    }
}

export default DetailBg;