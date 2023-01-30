import axios from "axios"

export namespace PendingISTRequestsService { 
  export const getList = () => {
    return axios.get('/')
  }
}