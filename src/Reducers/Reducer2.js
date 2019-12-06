import * as ActionTypes from '../Action/type';

const initialState={
   b:1
};
export default (state=initialState, action=1 ) => {
    switch (action.type) {
    case ActionTypes.U_S_V: {
    
    return {...state, b:state.b-action.value};
    }
        default:{
            return state;
    }
}

}

