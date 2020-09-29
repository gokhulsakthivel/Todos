import React ,{Component} from 'react'
// import Sidebar from './Sidebar'
import Sidebaritem from './Sidebaritem'
import sidebarArray from './sidebarArray'

import AddSharpIcon from '@material-ui/icons/AddSharp';
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';

import './Sidebarlist.css'

class Sidebarlist extends Component
{

    state = {
        array : sidebarArray,
        styl : {display:'none'}
    }

    

    addElementHandler = (event) =>{
        let tempArray = this.state.array.slice();
        let listName = document.getElementById("sidebar__input").value;
        document.getElementById("sidebar__input").value = ''
        console.log(listName)
        tempArray.push({
            id : tempArray.length+1,
            icon : 'ListSharpIcon',
            listName : listName,
            listCount : '0',
        });
        console.log(tempArray)
        this.setState({
            array : tempArray
        })
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

    callFuntctionHandler = () =>{
        this.addElementHandler();
        this.changeStyleHandler();
    }

    render()
    {

        let items = this.state.array.map((item) => {
            return <Sidebaritem key={item.id} name={item.listName} icon={item.icon} count={item.listCount}/>
        })
        return(
            // this.sidebarArray.map((item) => {
            //     return <Sidebaritem name={item.listName} icon={item.icon} count={item.count}/>
            // })
            <div>
                {items}
                <div className="sidebar__addInput" style={this.state.styl}  >
                                              
                        <input type="text" id="sidebar__input" />
                        <AddCircleSharpIcon onClick={this.callFuntctionHandler}/>  
                </div>
                <div className="sidebar__add" onClick={this.changeStyleHandler}>
                        <AddSharpIcon/>
                        <p>New List</p>
                </div>
            </div>
        )
    }
}

export default Sidebarlist;