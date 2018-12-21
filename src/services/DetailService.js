import axios from "axios";


class DetailService {

  constructor() {
    let service = axios.create({
      baseURL: process.env.REACT_APP_API_URL + "/detail",
      withCredentials: true
    });


    this.service = service;
  }

  createDetail = (detail, trip) => {
    return this.service.post("/new", {detail, trip})
    .then(response => response.data)
  }

}

export default DetailService;