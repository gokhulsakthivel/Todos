import React, { Component } from 'react';
import Sidebar from './Components/sidebar/Sidebar'
import Details from './Components/details/Details'
// import sidebarArray from './Components/sidebar/sidebarArray'
import {db} from './Services/firebase'
import './App.css';
import EmojiEmotionsSharpIcon from '@material-ui/icons/EmojiEmotionsSharp';
import Sidebarlist from './Components/sidebar/Sidebarlist'

class App extends Component {

  state = {
    array : [],
    name : "Buddy",
    isLightTheme : true
  }

  componentDidMount()
  {
      // console.log("Mounted");
      this.setOfflineArray();
      
      db.collection("users").doc("iNIR1xqLjNNqpzMkuRJO")
            .get()
            .then(snapshot => {
                var tempName = (snapshot.data().Name);
                var theme = (snapshot.data().lightTheme)
                // console.log(tempName,theme)
                if(tempName !== ""){
                    this.setState({
                        name : tempName,
                        isLightTheme : theme
                    });
                }
                
            })
            this.changeTheme();
  }

  setTheme = () =>{
    if(!this.state.isLightTheme){
      document.body.className = "bodyDarkTheme";
      // document.getElementsByTagName("input").className = "inputDarkTheme";
      var myList = document.getElementsByTagName("input");
      for (var i = 0; i < myList.length; i++) {
          myList[i].className = "inputDarkTheme";
      }
      // console.log("entered Theme")
    }
    else{
      document.body.className = "bodyLightTheme";
      myList = document.getElementsByTagName("input");
      for (i = 0; i < myList.length; i++) {
          myList[i].className = "inputLightTheme";
      }
    }
  }

  changeTheme = () =>{
    db.collection("users").doc('iNIR1xqLjNNqpzMkuRJO').update({
      "lightTheme" : !this.state.isLightTheme
    })
    this.setState({
      isLightTheme : !this.state.isLightTheme
    })
    this.setTheme()
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
                        tempArray.sort((a, b) => a.id - b.id);
                        this.setState({
                          array : tempArray
                        })
                        // console.log(this.state.array)
                    })
                    .catch(error =>console.log(error))
            })
        })
        .catch(error => console.log(error))
  }


 

  render(){
    
    

    return (
      <div className="App">
        
        {/* <Sidebar array={this.state.array} changeFunction={this.setOfflineArray}/> */}
        <Sidebar theme={this.state.isLightTheme} array={this.state.array} changeFunction={this.setOfflineArray}>
          <div className="sidebar__intro">
            <EmojiEmotionsSharpIcon/>
            <p>Hi {this.state.name}</p>
          </div>
          <div className="sidebar__list">
              <Sidebarlist theme={this.state.isLightTheme} array={this.state.array} setFunction={this.setOfflineArray} changeFunction={this.setOfflineArray}/>
          </div> 
        </Sidebar>

        <Details setTheme={this.changeTheme} theme={this.state.isLightTheme} array={this.state.array} changeFunction={this.setOfflineArray}/> 
      </div>
    )
  }
}

export default App;
