import React ,{Component} from 'react'
// import Sidebar from './Sidebar'
import Sidebaritem from './Sidebaritem'
// import sidebarArray from './sidebarArray'
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
        // array : this.props.array,
        styl : {display:'none'},
        val : "NewList",
        list_Name : "", 
    }
    
    componentDidMount()
    {
        
    }


    storeListName = (event) =>{
        this.setState({
            val : event.target.value
        })
    }


    changeActiveState = (id) =>{

        db.collection("users").doc('iNIR1xqLjNNqpzMkuRJO').collection("listNames").get()
            .then(snapshot => {
                snapshot.docs.map((value) => {
                    // console.log(value.data().active,value.data().listName);
                    // console.log(value.id);
                    value.data().id === id ?
                    db.collection("users").doc('iNIR1xqLjNNqpzMkuRJO').collection("listNames").doc(value.id).update({
                        active : true
                    }):
                    db.collection("users").doc('iNIR1xqLjNNqpzMkuRJO').collection("listNames").doc(value.id).update({
                        active : false
                    });
                    // value.update
                    return null;
                })
        })
        this.props.setFunction();
        // console.log(this.props.array)
        this.setState({
            array : this.props.array
        })

    }


    addElementHandler = () =>{
        //alert("entered")
        let tempArray = this.props.array.slice();
        let listName = document.getElementById("sidebar__input").value;
        // let listName = event.targetr.value;
        
        document.getElementById("sidebar__input").value = ''
        // console.log(listName)
        tempArray.push({
            active : true,
            id : tempArray.length+1,
            icon : 'ListSharpIcon',
            listName : listName,
            list : [],
            listCheck:[],
            listCount : 0
        });
        if(listName !== ''){
        // console.log(tempArray)}
        db.collection("users").doc('iNIR1xqLjNNqpzMkuRJO').collection("listNames")
            .add({
                active : true,
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
        this.changeActiveState(tempArray.length);
        // this.props.changeFunction();
        
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
        this.setState({
            val : ""
        }) :
        this.setState({
            val : "NewList"
        })
    }


    



    render()
    {

        let items = this.props.array.map((item,index) => {
            //console.log(item);
            return <Sidebaritem 
                            index = {index}
                            theme={this.props.theme}
                            key={item.id} 
                            name={item.listName} 
                            icon={item.icon} 
                            count={item.list.length}
                            active={item.active}
                            activeFunction={() => this.changeActiveState(item.id)}
                    />
        })
        
        return(
            <div className="sidebarlist">
                {items}

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