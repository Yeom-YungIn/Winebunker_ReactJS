import {Load_List, Search_List} from "./types";

const crudReducer = (state = null, action) => {
    switch (action.type) {
        case Load_List:
            return {state: state, result: action.payload}

        case Search_List:
            return {state: state, result: action.payload}

        default:
            return state;
    }
};

export default crudReducer;