import React, {
    useState
} from "react";

import AuthService
from "../auth/AuthService";

function Login({ onLogin }) {

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [error, setError] =
        useState("");

    const handleLogin = async () => {

        try {

            await AuthService.login(
                email,
                password
            );

            onLogin();

        } catch (err) {

            console.error(err);

            setError(
                "Invalid credentials"
            );
        }
    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-700 to-indigo-800">

            <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">

                <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">

                    NimbusFlow Login

                </h1>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border rounded-xl p-4 mb-4"
                    onChange={(e) =>
                        setEmail(
                            e.target.value
                        )
                    }
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border rounded-xl p-4 mb-4"
                    onChange={(e) =>
                        setPassword(
                            e.target.value
                        )
                    }
                />

                {
                    error &&
                    <p className="text-red-500 mb-4">
                        {error}
                    </p>
                }

                <button
                    onClick={handleLogin}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg transition"
                >
                    Login
                </button>

            </div>

        </div>
    );
}

export default Login;