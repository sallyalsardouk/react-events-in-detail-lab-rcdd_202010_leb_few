// Code CoordinatesButton Component Here
import React from 'react';
export default class CoordinatesButton extends React.Component{
  handleonClick=(event)=>{
    let arr=[event.clientX,event.clientY]
    this.props.onReceiveCoordinates(arr)
    
  }
 render(){
   return(
     <button onClich={this.handleonClick}></button>
     )
 }
  }
  
