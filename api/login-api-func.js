import { loginSteam } from "./login-api";

export const login = async (username,password) => {
    try {
        const data = await loginSteam({ username, password });
        return data
    } catch (e) {
        console.error(e);
    }
};
