import axios from 'axios'


const URL='http://localhost:3010'
const URL_Deploy='http://79.141.65.35:3010'

const axiosInstance = axios.create({
    baseURL: URL,
    withCredentials: true,
  });

export async function loginSteam({username,password}) {
    try {
        const res = await axiosInstance.post(`/login/login`,{username,password})
        return res.data
    } catch (e) {
        console.log(e);
        throw e
    }
}
