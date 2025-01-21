import { useEffect } from "react";
import useAuth from "./useAuth";
import axiosPrivate from "../api/api-client";

const useAxiosPrivate = () => {
    const { auth } = useAuth();

    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers?.Authorization) {
                    config.headers.Authorization = `Bearer ${auth?.accessToken}`;
                }
                if (!config.data) {
                    config.data = {};
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            (response) => {
                return { ...response, data: response.data?.data ?? response.data };
            },
            async (error) => {
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [auth?.accessToken])

    return axiosPrivate;
}

export default useAxiosPrivate;