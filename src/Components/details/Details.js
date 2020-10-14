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


    deleteCheckedlist = (indexOfListCheck) =>{
        let activeId = 0;
        this.props.array.map(items => {
            if(items.active){
                // console.log("Entered",items.id)
                activeId = items.id-1;
            }
        });

        db.collection("users").doc('iNIR1xqLjNNqpzMkuRJO').collection("listNames").get()
            .then(snapshot => {
                snapshot.docs.map((value) => {

                    var tempArray = value.data().listCheck;
                    tempArray.splice(indexOfListCheck, 1)

                    var tempArrayList = value.data().list;
                    tempArrayList.splice(indexOfListCheck, 1)
                    
                    value.data().id === activeId+1 ?
                    // console.log(value.data().id,value.data().listCheck[indexOfListCheck]),
                    db.collection("users").doc('iNIR1xqLjNNqpzMkuRJO').collection("listNames").doc(value.id).update({
                        listCheck : tempArray,
                        list : tempArrayList
                    }):console.log();

                    return null;
                })
        })

        this.props.changeFunction();
    }

    changeCheckedlist = (indexOfListCheck) =>{
        let activeId = 0;
        this.props.array.map(items => {
            if(items.active){
                // console.log("Entered",items.id)
                activeId = items.id-1;
            }
        });

        db.collection("users").doc('iNIR1xqLjNNqpzMkuRJO').collection("listNames").get()
            .then(snapshot => {
                snapshot.docs.map((value) => {

                    var tempValue = !value.data().listCheck[indexOfListCheck];
                    var tempArray = value.data().listCheck;
                    tempArray[indexOfListCheck] = tempValue
                    
                    value.data().id === activeId+1 ?
                    // console.log(value.data().id,value.data().listCheck[indexOfListCheck]),
                    db.collection("users").doc('iNIR1xqLjNNqpzMkuRJO').collection("listNames").doc(value.id).update({
                        listCheck : tempArray,
                    }):console.log();

                    return null;
                })
        })
        this.props.changeFunction();
        // this.props.changeFunction();
    }

    addListTodos = () =>{
        let activeId = 0;
        this.props.array.map(items => {
            if(items.active){
                // console.log("Entered",items.id)
                activeId = items.id;
            }
        });

        var input = document.getElementById('details__input').value;

        var templist = this.props.array[activeId].list;
        console.log(templist,activeId)
        templist.push(input)
        var templistCheck = this.props.array[activeId].listCheck;
        templistCheck.push(false)
        
        db.collection("users").doc('iNIR1xqLjNNqpzMkuRJO').collection("listNames").get()
            .then(snapshot => {
                snapshot.docs.map((value) => {
                    
                    // console.log(templistCheck,templist,input);
                    // console.log(activeId,"id",value.data().id);
                    value.data().id === activeId ?
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

    handleKeyPress = (event) => {
        // console.log("neter");
        if(event.key === 'Enter'){
            this.addListTodos()
        }
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
                    return <DetailItem deleteCheckedListItem={this.deleteCheckedlist} changeChecked={this.changeCheckedlist} texts={item} ind={index-1} key={index-1} isChecked={items.listCheck[index-1]}/>
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
                                onKeyPress={this.handleKeyPress}
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