import * as ActionTypes from '../Action/type';

const initialState={
    a:1
};

export default (state=initialState, action ) => {
    switch (action.type) {
    case ActionTypes.U_A_V: {
    
    return {...state, a:state.a+action.value};
    }
    case ActionTypes.U_S_V: {
    
    return {...state,a:state.a-action.value};
    }
    case ActionTypes.U_I_V: {
    if(state.a%2==0){
    return {...state, a:state.a+action.value};
    }
    } 
    default :{
    return state ;
    }
    }
    }



   