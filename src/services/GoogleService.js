import axios from "axios";


class GoogleService {

  constructor() {
    let service = axios.create({
      baseURL: "http://localhost:5000/api/google",
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


  login = (username, password) => {
    return this.service.post("/login", {username, password})
    .then(response => response.data)
  }


  loggedin = () =>{
    return this.service.get("/loggedin")
    .then(response => response.data)
  }

  logout = () =>{
    return this.service.post("/logout", {})
    .then(response => response.data)
  }
}

export default GoogleService;