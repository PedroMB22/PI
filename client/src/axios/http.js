import axios from "axios";

const BASE_URL = 'http://localhost:3001'

let instance = axios.create({
  baseURL: `${BASE_URL}`,
});


export const httpRequest = instance