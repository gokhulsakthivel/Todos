import React ,{Component} from 'react'
// import Sidebar from './Sidebar'
import Sidebaritem from './Sidebaritem'
import sidebarArray from './sidebarArray'
import {db} from '../../Services/firebase'
// import './sidebarlistfunctions'
import AddSharpIcon from '@material-ui/icons/AddSharp';
// import BookmarkBorderSharpIcon from '@material-ui/icons/BookmarkBorderSharp';
// import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import BookSharpIcon from '@material-ui/icons/BookSharp';


import './Sidebarlist.css'

class Sidebarlist extends Component
{

    state = {
        array : sidebarArray,
        styl : {display:'none'},
        val : "NewList",
        list_Name : ""
    }

    
    componentDidMount()
    {
        console.log("Mounted")
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
                        })
                        .catch(error =>console.log(error))
                })
            })
            .catch(error => console.log(error))
    }

    storeListName = (event) =>{
        this.setState({
            val : event.target.value
        })
    }

    addElementHandler = () =>{
        //alert("entered")
        let tempArray = this.state.array.slice();
        let listName = document.getElementById("sidebar__input").value;
        // let listName = event.targetr.value;
        
        document.getElementById("sidebar__input").value = ''
        console.log(listName)
        tempArray.push({
            id : tempArray.length+1,
            icon : 'ListSharpIcon',
            listName : listName,
            list : [],
            listCount : 0
        });
        if(listName !== ''){
        // console.log(tempArray)}
        db.collection("users").doc('iNIR1xqLjNNqpzMkuRJO').collection("listNames")
            .add({
                id : tempArray.length,
                icon : 'ListSharpIcon',
                listName : listName,
                list : [],
                listCount : 0
            })
        this.setState({
            array : tempArray
        })
        }
        this.changeInputValue();
        this.setState({
            styl:{display:'none'}
        })
    }

    onFocusInputHandler = () =>{
        this.changeInputValue();
        this.setState({
            styl:{}
        })
    }

    onBlurInputHandler = (event) =>{
        if(event.target.value === '')
        {
            this.changeInputValue();
            this.setState({
                styl:{display:'none'}
            })
        }
    }

    changeInputValue = () => {

        this.state.val === 'NewList' ?
        // console.log('focus'):console.log('blur')
        this.setState({
            val : ""
        }) :
        this.setState({
            val : "NewList"
        })
    }

    render()
    {

        let items = this.state.array.map((item) => {
            return <Sidebaritem 
                            key={item.id} 
                            name={item.listName} 
                            icon={item.icon} 
                            count={item.list.length}
                            
                    />
        })
        return(
            <div className="sidebarlist">
                {items}

                {/* <div className="sidebar__addInput" style={this.state.styl}  >
                        <input type="text" id="sidebar__input" />
                        <AddCircleSharpIcon onClick={this.callFuntctionHandler}/>  
                </div> */}

                <div className="sidebar__newList">
                    <div className="sidebar__add" >
                        <AddSharpIcon/>
                        <input 
                                type="text" 
                                id="sidebar__input" 
                                onFocus={this.onFocusInputHandler} 
                                onBlur={(event) => this.onBlurInputHandler(event)}
                                onKeyPress={this.add}
                                onChange={(event) => this.storeListName(event)}  
                                value={this.state.val}  
                                placeholder="Unanmed List"
                        />
                    </div>
                    <div className="sidebar__submitIcon">
                        <BookSharpIcon  
                                onClick={this.addElementHandler} 
                                style={this.state.styl}
                        />
                        {/* <BookmarkBorderSharpIcon/> */}
                    </div>
                </div>

            </div>
        )
    }
}

export default Sidebarlist;