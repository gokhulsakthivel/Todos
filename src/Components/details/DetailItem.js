import React, { Component } from 'react';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import DeleteIcon from '@material-ui/icons/Delete';
import './DetailItem.css'
import audio1 from '../../Assests/Audio/3.mp3'
import audio2 from '../../Assests/Audio/4.mp3'

class DetailItem extends Component{

    changeCheckItem = () =>{
        var indexOfListChecked = this.props.ind;
        this.props.changeChecked(indexOfListChecked)
    }

    deleteItem = () =>{
        var indexOfListChecked = this.props.ind;
        var audio
        this.props.deleteCheckedListItem(indexOfListChecked)
        this.props.isChecked ?
        audio = new Audio(audio1) : audio = new Audio(audio2)
        audio.play();
        // console.log(audio);        
    }

    render(){
        // console.log(this.props);
        
        let style = this.props.isChecked ? ({textDecoration : "line-through"}) : {textDecoration : "none"};
        return(

            <div className="detailItem">
                <div className="detailitem__check">
                    {this.props.isChecked ? <CheckBoxIcon onClick={this.changeCheckItem} /> : <CheckBoxOutlineBlankIcon onClick={this.changeCheckItem} />}
                    <p style={style}>{this.props.texts}</p>
                </div>
                <div className="detailItem__delete">
                    <DeleteIcon onClick={this.deleteItem}/>
                </div>
            </div>
        )
    }
}

export default DetailItem;
