import {Auth_Login_Success} from "./types";

const authReducer = (state = null, action) => {
    switch (action.type) {
        case Auth_Login_Success :
            return {state: state, result: action.payload}

        default:
            return state;
    }
};

export default authReducer;