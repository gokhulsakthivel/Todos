import React, { Component } from 'react';
import sidebarArray from '../sidebar/sidebarArray'
import {db} from '../../Services/firebase'
import DetailBg from './DetailBg'
import DetailItem from './DetailItem'
import './Details.css'
import BookSharpIcon from '@material-ui/icons/BookSharp';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import MenuIcon from '@material-ui/icons/Menu';

class Detail extends Component{

    

    state = {
        array : sidebarArray,
    }

    componentDidMount()
    {
        // console.log("Mounted", this.props.array, "Details");
    }
  
    displaySidebar = () =>{
        let list = document.getElementsByClassName("sidebar");
        let ham = document.getElementsByClassName("menuIcon");
        if(list[0].style.display === 'block'){
            list[0].style.display = 'none';
            ham[0].style.top = '10px';
            ham[0].style.bottom = '10px';
        }
        else
        {
            list[0].style.display = 'block';
            ham[0].style.top = '10px';
            ham[0].style.bottom = '10px';
        }
    }

    activeId = () =>{
        this.props.array.map(items => {
            if(items.active){
                return items.id;
            }
        });
    } 

    addListTodos = () =>{
        let activeId = 0;
        this.props.array.map(items => {
            if(items.active){
                // console.log("Entered",items.id)
                activeId = items.id-1;
            }
        });

        var input = document.getElementById('details__input').value;
        console.log(this.props.array[activeId],activeId)
        var templist = this.props.array[activeId].list;
        templist.push(input)
        var templistCheck = this.props.array[activeId].listCheck;
        templistCheck.push(false)
        console.log(templistCheck,templist,input, this.props.array[activeId].listCheck, this.props.array[activeId].list);

        db.collection("users").doc('iNIR1xqLjNNqpzMkuRJO').collection("listNames").get()
            .then(snapshot => {
                snapshot.docs.map((value) => {
                    
                    // console.log(templistCheck,templist,input);
                    // console.log(activeId,"id",value.data().id);
                    value.data().id === activeId+1 ?
                    db.collection("users").doc('iNIR1xqLjNNqpzMkuRJO').collection("listNames").doc(value.id).update({
                        list : templist,
                        listCheck : templistCheck
                    }):
                    console.log("none");
                    // value.update
                    return null;
                })
        })
        document.getElementById('details__input').value = "";
        this.props.changeFunction();
    }


    render()
    {
        // this.props.changeFunction();
        let list = this.props.array.map((items =>{
            // console.log(items);
            var index = 0;
            if(items.active){
                return items.list.map((item)=>{
                    index += 1;
                    return <DetailItem texts={item} key={index} isChecked={items.listCheck[index-1]}/>
                })
            }
        }))

        let title = this.props.array.map(items => {
            if(items.active){
                return items.listName;
            }
        }) 

        return(
            <div className="details" >
                <MenuIcon className="menuIcon" onClick={this.displaySidebar}/>
                <div >
                    <DetailBg setTheme={this.props.setTheme} theme={this.props.theme} text={title}/>
                </div>  
                {list}
                <div className="details__newList">
                    <div className="details__add" >
                        <AddSharpIcon/>
                        <input 
                                type="text" 
                                id="details__input" 
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
                                onClick={this.addListTodos} 
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