import { useEffect } from "react";
import {
  ERROR_ON_REQUEST,
  NOT_FOUND,
  SERVER_SIDE_ERROR,
} from "../constants/messages/error-messages";
import useAuth from "../hooks/useAuth";
import axiosPrivate from "./api-client";
import {
  NOT_FOUND_CODE,
  SERVER_ERROR_CODE,
} from "../constants/api-constants";

const ApiProvider = ({ children }) => {
  const { auth } = useAuth();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      async (config) => {
        if (!config.headers?.Authorization) {
          config.headers.Authorization = `Bearer ${auth?.accessToken}`;
        }
        if (!config.data) {
          config.data = {};
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => {
        return { ...response, data: response.data?.data ?? response.data };
      },
      async (error) => {
        const unknowMessage =
          response.status >= SERVER_ERROR_CODE
            ? SERVER_SIDE_ERROR
            : ERROR_ON_REQUEST;
        let customError =
          (error?.response?.data &&
            (error?.response?.data?.message?.correccion ||
              error?.response?.data.message?.textoError)) ||
          unknowMessage;
        if (response.status === NOT_FOUND_CODE) {
          customError = NOT_FOUND;
        }
        return Promise.reject(
          error?.response?.data?.error_type
            ? error?.response?.data
            : customError
        );
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [auth?.accessToken]);

  return children;
};

export default ApiProvider;
