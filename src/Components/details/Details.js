import React, { Component } from 'react';
import sidebarArray from '../sidebar/sidebarArray'
import {db} from '../../Services/firebase'
import DetailBg from './DetailBg'
import DetailItem from './DetailItem'
import './Details.css'
import BookSharpIcon from '@material-ui/icons/BookSharp';
import AddSharpIcon from '@material-ui/icons/AddSharp';

class Detail extends Component{

    

    state = {
        array : sidebarArray,
    }

    componentDidMount()
    {
        // console.log("Mounted", this.props.array, "Details");
    }

    setOfflineArray = () =>{
        db.collection("users")
            .get()
            .then( snapshot => {
                snapshot.docs.map((userDoc) =>{
                    // console.log(userDoc['id'])
                    db.collection("users").doc(userDoc['id']).collection("listNames")
                        .get()
                        .then( snapshot =>{
                            let tempArray = []
                            snapshot.docs.map((listnamesDoc) => {
                                tempArray.push(listnamesDoc.data())
                            })
                            this.setState({
                                array:tempArray
                            })
                            // return null;
                        })
                        .catch(error =>console.log(error))
                })
                // return null;
            })
            .catch(error => console.log(error))
    }

    


    render()
    {
        // this.props.changeFunction();
        let list = this.props.array.map((items =>{
            // console.log(items);
            if(items.active){
                return items.list.map((item)=>{
                    // console.log(item);
                    
                    return <DetailItem texts={item}/>
                })
            }
        }))



        return(
            <div className="details" >
                <div >
                    <DetailBg/>
                </div>  
                {list}
                <div className="details__newList">
                    <div className="details__add" >
                        <AddSharpIcon/>
                        <input 
                                // type="text" 
                                // id="details__input" 
                                // onFocus={this.onFocusInputHandler} 
                                // onBlur={(event) => this.onBlurInputHandler(event)}
                                // onKeyPress={this.add}
                                // onChange={(event) => this.storeListName(event)}  
                                // value={this.state.val}  
                                placeholder="Unanmed List"
                        />
                    </div>
                    <div className="details__submitIcon">
                        <BookSharpIcon  
                                // onClick={this.addElementHandler} 
                                // style={this.state.styl}
                        />
                        {/* <BookmarkBorderSharpIcon/> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Detail;