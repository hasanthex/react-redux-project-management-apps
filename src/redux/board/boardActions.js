import { ADD, REMOVE} from "./boardActionTypes";

export const add = (value) => {
    return {
        type: ADD,
        payload: value
    }
}

export const remove = (id) => {
    return {
        type: REMOVE,
        payload: id
    }
}