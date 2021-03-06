import axios from "axios";


class GoogleService {

  constructor() {
    let service = axios.create({
      baseURL: process.env.REACT_APP_API_URL + "/google",
      withCredentials: true
    });


    this.service = service;
  }


//   axios.create allows you to preconfigure the url (and headers) of axios requests
// so that when we make an axios request with that object, we pass in a url, and that url gets added onto the end of the url we created the axios object with
  locationInfo = (city) => {
    return this.service.post("/locationInfo", {city})
    .then(response => {
      return response.data})
  }
}

export default GoogleService;