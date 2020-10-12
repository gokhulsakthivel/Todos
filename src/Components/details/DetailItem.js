import React, { Component } from 'react';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import DeleteIcon from '@material-ui/icons/Delete';
import './DetailItem.css'

class DetailItem extends Component{
    render(){
        // console.log(this.props);
        let style = this.props.isChecked ? {textDecoration : "line-through"} : null;
        return(

            <div className="detailItem">
                <div className="detailitem__check">
                    {this.props.isChecked ? <CheckBoxIcon/> : <CheckBoxOutlineBlankIcon/>}
                    <p style={style}>{this.props.texts}</p>
                </div>
                <div className="detailItem__delete">
                    <DeleteIcon/>
                </div>
            </div>
        )
    }
}

export default DetailItem;
