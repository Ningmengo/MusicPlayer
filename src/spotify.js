import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "1c8c423ef16a4ec5bf71e6d9e22c4722";
const redirectUri = "https://music-player-ningmengo.vercel.app/";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});
// Add a request interceptor
export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};
export default apiClient;
