import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Update_A,Update_B,Incre} from '../Action/Action';
class Task1 extends Component {
    render() {
    return (
    <div>
        <div> NUMBER</div><br></br>
       
       {this.props.a}<br></br>
        
      
         <button onClick={this.props.Update_A}>+</button>
        <button onClick={this.props.Update_B}>-</button>
        <button onClick={this.props.Incre}>Increment if Number is even</button> 
    </div> 
            );
        }
    }
    const mapStoreToProps=(state)=>
    {
        const {a} = state.Reducer1;
        const {b} = state.Reducer2;
        return {a,b};
}

export default connect(mapStoreToProps,{Update_A,Update_B,Incre})(Task1);