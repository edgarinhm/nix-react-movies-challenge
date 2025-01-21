import {
    ERROR_ON_REQUEST,
    NOT_FOUND,
    SERVER_SIDE_ERROR,
} from "../constants/messages/error-messages";
import { getUserSessionModel, setUserSession } from "../helpers/auth";

const useAuth = () => {
    const auth = getUserSessionModel();
    setUserSession({ accessToken: 'Wookie2021' }) //TODO: remove
    const setAuth = (user) => setUserSession(user);
    
    const errorMessages = {
        ERROR_ON_REQUEST,
        SERVER_SIDE_ERROR,
        NOT_FOUND,
    };

    return {
        auth,
        setAuth,
        errorMessages,
    };
};

export default useAuth;
