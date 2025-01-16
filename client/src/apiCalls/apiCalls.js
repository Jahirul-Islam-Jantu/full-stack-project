import axios from "axios";
import {ErrorMessage, SuccessMessage} from "../helper/helper.js";

const baseURL = "http://localhost:3000/api"

class ApiCalls {
    async registerUser(reqBody) {
        let result = await axios.post(`${baseURL}/registerUser`, reqBody)

        if (result.data.status === "Success"){
            SuccessMessage(result.data.message)
            return true
        }
        else{
            ErrorMessage(result.data.message)
            return false
        }
    }

    async universalApi(apiEndPoint, reqBody){
        let result = await axios.post(`${baseURL}/${apiEndPoint}`, reqBody)
        if (result.data.status === "Success"){
            SuccessMessage(result.data.message)
            return true
        }else {
            ErrorMessage(result.data.message)
            return false;
        }


    }




}

export const {registerUser, universalApi} = new ApiCalls( )