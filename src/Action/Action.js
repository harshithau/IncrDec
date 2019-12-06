import * as ActionTypes from './type';

export function Update_A(){
  return function (dispatch){
  dispatch({
  type:'U_A_V',value:1
    });
  }
}

export function Update_B(){
  return function (dispatch){
  dispatch({
  type:'U_S_V',value:1
    });
  }
}

export function Incre(){
  return function (dispatch){
  dispatch({
  type:'U_I_V',value:1
    });
  }
}


