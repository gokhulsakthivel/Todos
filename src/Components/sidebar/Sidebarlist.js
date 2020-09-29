import React ,{Component} from 'react'
// import Sidebar from './Sidebar'
import Sidebaritem from './Sidebaritem'
import sidebarArray from './sidebarArray'

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

    storeListName = (event) =>{
        this.setState({
            val : event.target.value
        })
    }

    addElementHandler = () =>{
        alert("entered")
        let tempArray = this.state.array.slice();
        let listName = document.getElementById("sidebar__input").value;
        // let listName = event.targetr.value;
        
        document.getElementById("sidebar__input").value = ''
        console.log(listName)
        tempArray.push({
            id : tempArray.length+1,
            icon : 'ListSharpIcon',
            listName : listName,
            listCount : '0',
            list : []
        });
        if(listName !== ''){
        // console.log(tempArray)}
        this.setState({
            array : tempArray
        })
        }
        this.onBlurInputHandler()
    }

       
    changeStyleHandler = () =>{
        const disp = this.state.styl.display;
        
        if(disp === 'none'){
            this.setState({
                styl:{}
            })
        }
        else{
            this.setState({
                styl:{display:'none'}
            })
        }
    }

    // callFuntctionHandler = () =>{
    //     this.addElementHandler();
    //     this.changeStyleHandler();
    // }

    onFocusInputHandler = () =>{
        this.changeInputValue();
        this.setState({
            styl:{}
        })
    }

    onBlurInputHandler = () =>{
        this.changeInputValue();
        this.setState({
            styl:{display:'none'}
        })
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
                            count={item.listCount}
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
                                // onBlur={this.onBlurInputHandler}
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