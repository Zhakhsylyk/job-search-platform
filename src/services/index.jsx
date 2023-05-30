import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "universal-cookie";

const baseURL = "http://job-1-env.eba-drhtnqhp.us-east-2.elasticbeanstalk.com";

const cookies = new Cookies();

export const apiService = axios.create({
  baseURL: baseURL,
});

export const AuthService = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${cookies.get("jwt_token") ? cookies.get('jwt_token') : 'test'}`,
  },
});

export const handleSuccess = (res) => {
  toast.success("Successfully", {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};
export const handleError = (err) => {
  try {
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
      default:
        toast.error("Обратитесь к администратору", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
    }
  } catch {
    toast.error("Ошибка! Обратитесь к администратору", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
};
