import React, { Component } from 'react';

class DetailItem extends Component{
    render(){
        // console.log(this.props);
        return(
            <div>
                <p>{this.props.texts}</p>
            </div>
        )
    }
}

export default DetailItem;
