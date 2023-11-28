import axios from "axios";
import {Load_List} from "./types.js";

export async function loadList() {
    let request = {
        type: Load_List,
        payload: null,
    }

    try {
        const response= await axios.get("/resource/vin",{
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