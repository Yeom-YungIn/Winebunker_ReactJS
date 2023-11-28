import {Load_List} from "../_actions/types";

export default function (state = null, action) {
    switch (action.type) {
        case Load_List:
            return {state: state, result: action.payload}

        default:
            return state;
    }
};