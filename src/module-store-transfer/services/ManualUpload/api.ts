import axios from "axios"

export namespace ManualUploadService { 
  export const uploadFile = () => {
    return axios.post('/')
  }
}