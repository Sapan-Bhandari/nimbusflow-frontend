import React from "react";

function ScoreCard({ score }) {

    let color = "text-red-500";

    if (score >= 70) {
        color = "text-green-500";
    } else if (score >= 50) {
        color = "text-yellow-500";
    }

    return (

        <div className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white rounded-2xl p-10 shadow-xl text-center mt-8">

            <h2 className="text-3xl font-bold mb-6">
                ATS Match Score
            </h2>

            <div className={`text-7xl font-extrabold ${color}`}>

                {score}%

            </div>

            <p className="mt-4 text-blue-100 text-lg">

                AI-powered semantic matching result

            </p>

        </div>
    );
}

export default ScoreCard;