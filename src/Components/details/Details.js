import React, { Component } from 'react';
import DetailBg from './DetailBg'
import './Details.css'

class Detail extends Component{
    render()
    {
        return(
            <div className="details">
                <DetailBg/>
            </div>  
        )
    }
}

export default Detail;