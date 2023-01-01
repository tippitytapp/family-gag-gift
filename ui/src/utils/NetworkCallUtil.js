import axios from "axios"

export default function CallApi(){
    return axios.create({baseUrl: "http://localhost:3432"})
}
