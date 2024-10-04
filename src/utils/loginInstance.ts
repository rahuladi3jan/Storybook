import axios from "axios";
import promise from "promise";

const loginInstance = axios.create();

loginInstance.interceptors.request.use(
  async function (config: any) {
    config.headers["clientName"] = process.env.CLIENT_NAME;
    config.headers["x-apikey"] = process.env.API_KEY;

    if (process?.env.ENV_KEY?.startsWith("DEV")) {
      config.headers["ENVIRONMENT"] = process?.env.ENV_KEY;
    }

    return config;
  },
  function (error) {
    return promise.reject(error);
  }
);
export default loginInstance;
