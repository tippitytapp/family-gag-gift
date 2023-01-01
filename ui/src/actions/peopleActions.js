// import CallApi from "../utils/NetworkCallUtil";
import axios from "axios"
export async function fetchNames(){
    return await axios.get("http://localhost:3432/names/list/all").then(resp => { return Promise.resolve(resp?.data)}).catch(err=>Promise.reject(err))
}

export async function fetchUser(name){
    return await axios.get(`http://localhost:3432/names/${name}`).then(resp => { return Promise.resolve(resp?.data)}).catch(err=>Promise.reject(err))
}

