import http from "k6/http";

// Take port from env variable
const apiEndpoint = `http://${__ENV.API_HOST}:${__ENV.API_PORT}`;

export default function () {
  const randomId = Math.ceil(Math.random() * 99 + 1);
  http.get(`${apiEndpoint}/user/ID_${randomId}`);
}
