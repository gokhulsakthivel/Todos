import React, { Component } from 'react';
import Sidebar from './Components/sidebar/Sidebar'
import Details from './Components/details/Details'
import sidebarArray from './Components/sidebar/sidebarArray'
import {db} from './Services/firebase'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
  }

  state = {
    // array : db.collection("users")
    //           .doc('iNIR1xqLjNNqpzMkuRJO')
    //           .collection("listNames")
    //           .get().then(snapshot => {
    //             return snapshot.data();
    //           })
    array : []
  }

  componentDidMount()
  {
      console.log("Mounted");
      // this.setOfflineArray();
      console.log(this.state.array, "app")
  }
  


  setOfflineArray = () =>{
    // console.log("entered");
    db.collection("users")
        .get()
        .then( snapshot => {
            snapshot.docs.map((userDoc) =>{
                db.collection("users").doc(userDoc['id']).collection("listNames")
                    .get()
                    .then( snapshot =>{
                        let tempArray = []
                        snapshot.docs.map((listnamesDoc) => {
                            tempArray.push(listnamesDoc.data())
                        })
                        this.setState({
                          array : tempArray
                        })
                        console.log(this.state.array)
                    })
                    .catch(error =>console.log(error))
            })
        })
        .catch(error => console.log(error))
  }

  render(){

    // let side =

    return (
      <div className="App">
        
        <Sidebar array={this.state.array} changeFunction={this.setOfflineArray}/>
        {/* sideBar */}
        <Details array={this.state.array} changeFunction={this.setOfflineArray}/>
        {/* details */}
  
      </div>
    )
  }
}

export default App;
