import axios from "axios";

const api = axios.create({
  baseURL: "https://api.opensea.io/api/v2",
  headers: {
    "X-API-KEY": "bc61ee4a3ddb40e4adce299e642569eb",
  },
});

export default api;

// when use environment variable on vercel to hide key then can create .env file at root
// API_KEY = bc61ee4a3ddb40e4adce299e642569eb
// put .env in gitignore

// api.ts
// import axios from "axios";
// const API_KEY = process.env.API_KEY;

// const api = axios.create({
//   baseURL: "https://api.opensea.io/api/v2",
//   headers: {
//     "X-API-KEY": API_KEY,
//   },
// });

// export default api;

//By setting up a server-side proxy, you can bypass CORS issues by routing your requests through your own server. This server handles requests to the OpenSea API, including the required API key in the headers, and sends the data back to your React application.
