import http from "k6/http";

// Take port from env variable
const apiEndpoint = `http://${__ENV.API_HOST}:${__ENV.API_PORT}`;

export default function () {
  http.get(`${apiEndpoint}/users`);
}
