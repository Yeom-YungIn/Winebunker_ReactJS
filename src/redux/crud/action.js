import axios from "axios";
import {Load_List, Registration_Resource, Search_List} from "./types.js";

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
};

export const searchList = async (searchVal) => {
    let request = {
        type: Search_List,
        payload: null,
    }

    try {
        const response= await axios.get("/resource/search",{
            params: {
                searchVal: searchVal
            }
        });
        console.log(response)
        request.payload = response.data;
    } catch (e) {
        console.log(e)
    }

    return request;
};

export const registrationResource = async (resourceDto, jwtToken) => {
    let request = {
        type: Registration_Resource,
        payload: null,
    };

    try {
        const response = await axios.post("/resource/save", resourceDto,{
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            }
        });
        console.log(response.status)
        request.payload = response.status;
    } catch (e) {
        console.log(e);
    }

    return request;
};