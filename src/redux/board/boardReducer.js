import {ADD, REMOVE} from "./boardActionTypes";

const initialState = {
    // item: [{
    //     id: 0,
    //     title: "",
    //     category: "",
    //     tag: [],
    //     details: "",
    //     comments: [],
    //     attach: []
    // }],
    item: [],
    value: 0
}

const boardReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD:
            return {
                ...state,
                item: [...state.item, action.payload],
                value: state.value + 1
            };
        case REMOVE:
            return {
                ...state,
                value: state.value - 1
            }
        default:
            return state;
    }
}

export default boardReducer;