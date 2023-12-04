import axios from "axios";
import {Load_List, Search_List} from "./types.js";

export const loadList = async () => {
    let request = {
        type: Load_List,
        payload: null,
    }

    try {
        const response= await axios.get("/resource/vin/list",{
            params: {
                page: 0,
            }
        });
        request.payload = response.data;
    } catch (e) {
        console.log(e)
    }

    return request;
}

export const searchList = async (searchVal) => {
    let request = {
        type: Search_List,
        payload: null,
    }

    try {
        const response= await axios.get("/resource/vin/list",{
            params: {
                searchVal: searchVal
            }
        });
        request.payload = response.data;
    } catch (e) {
        console.log(e)
    }

    return request;
}