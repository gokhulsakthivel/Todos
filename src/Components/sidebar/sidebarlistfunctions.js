
import React from 'react'

const componentDidMount()
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
                            // db.collection("users").doc(userDoc['id']).collection("listNames").doc(listnamesDoc['id'])
                            //     .get()
                            //     .then( snapshot =>{
                            //         console.log(snapshot)
                            //     })
                            tempArray.push(listnamesDoc.data())
                        })
                        this.setState({
                            array:tempArray
                        })
                    })
            })
        } )
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