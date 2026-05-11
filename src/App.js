import React, {
    useState
} from "react";

import ResumeUpload
from "./components/ResumeUpload";

import JobForm
from "./components/JobForm";

import MatchAnalyzer
from "./components/MatchAnalyzer";

import Login
from "./components/Login";

import AuthService
from "./auth/AuthService";

function App() {

    const [authenticated,
        setAuthenticated] = useState(

            AuthService.isAuthenticated()
    );

    const logout = () => {

        AuthService.logout();

        setAuthenticated(false);
    };

    if (!authenticated) {

        return (
            <Login
                onLogin={() =>
                    setAuthenticated(true)
                }
            />
        );
    }

    return (

        <div className="min-h-screen bg-gray-100">

            {/* HEADER */}

            <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-6 shadow-lg">

                <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">

                    <div>

                        <h1 className="text-4xl font-bold">
                            NimbusFlow ATS
                        </h1>

                        <p className="text-blue-100">
                            AI Resume Analyzer
                        </p>

                    </div>

                    <button
                        onClick={logout}
                        className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-xl"
                    >
                        Logout
                    </button>

                </div>

            </div>

            {/* MAIN CONTENT */}

            <div className="max-w-6xl mx-auto px-6 py-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    <ResumeUpload />

                    <JobForm />

                </div>

                <div className="mt-10">

                    <MatchAnalyzer />

                </div>

            </div>

        </div>
    );
}

export default App;