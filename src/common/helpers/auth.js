import { LOCALSTAORAGE_PREV_PATH, LOCALSTORAGE_USER } from "../constants/local-storage-keys";

export const getUserSession = () => {
	return localStorage.getItem(LOCALSTORAGE_USER);
};

export const setUserSession = (user) => {
	return localStorage.setItem(LOCALSTORAGE_USER, JSON.stringify(user));
};

export const deleteUserSession = () => {

	return localStorage.removeItem(LOCALSTORAGE_USER);
};

export const getUserSessionModel = () => {
	try {
		const userData = getUserSession();
		return JSON.parse(userData);
	} catch (error) {
		return {};
	}
}

export const getAllowedRolValidation = (path) => {
	const user = getUserSessionModel();
	const allowedRoles = user?.funcionesFuncionario;
	return getRoleValidationRecursive(allowedRoles, path);
}

export const getRoleValidationRecursive = (allowedRoles, path) => {
	const validatedRoles = allowedRoles.find((role) => {
		const isAllowedRole = role.ruta === path;
		const hasMenu = !!role?.menu;
		return isAllowedRole ? isAllowedRole : hasMenu ? getRoleValidationRecursive(role.menu, path) : false;
	})
	return validatedRoles ? true : false;
}

export const getPrevPath = () => {
	return localStorage.getItem(LOCALSTAORAGE_PREV_PATH);
}
