import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const api = axios.create({
  baseURL: "2f0a-95-141-138-92.ngrok-free.app",
  timeout: 1000,
  headers: {
    Authorization: `Bearer token`,
  },
});

export const handleError = (err) => {
  switch (err.response.status) {
    case 400:
      toast.error(err.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      break;
    case 401:
      toast.error(err.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      break;
    case 403:
      toast.error(err.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      break;
    case 404:
      toast.error(err.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      break;
    case 500:
      toast.error(err.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      break;
  }
};
