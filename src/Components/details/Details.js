import React, { Component } from 'react';
import sidebarArray from '../sidebar/sidebarArray'
import {db} from '../../Services/firebase'
import DetailBg from './DetailBg'
import DetailItem from './DetailItem'
import './Details.css'

class Detail extends Component{

    constructor(props){
        super(props)
        this.state = {
            array : sidebarArray,
        }
        // this.props.changeFunction.bind(this);
    }

    

    componentDidMount()
    {
        console.log("Mounted", this.props.array, "Details");
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
        let list = this.state.array.map((items =>{
            console.log(items);
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
            </div>
        )
    }
}

export default Detail;