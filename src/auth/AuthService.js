import API from "../services/api";

const TOKEN_KEY = "jwt_token";

const AuthService = {

    login: async (email, password) => {

        const response = await API.post(
            "/auth/login",
            {
                email,
                password
            }
        );

        const token =
            response.data.token;

        localStorage.setItem(
            TOKEN_KEY,
            token
        );

        return token;
    },

    register: async (
        name,
        email,
        password
    ) => {

        return API.post(
            "/auth/register",
            {
                name,
                email,
                password
            }
        );
    },

    logout: () => {

        localStorage.removeItem(
            TOKEN_KEY
        );
    },

    getToken: () => {

        return localStorage.getItem(
            TOKEN_KEY
        );
    },

    isAuthenticated: () => {

        return !!localStorage.getItem(
            TOKEN_KEY
        );
    }
};

export default AuthService;