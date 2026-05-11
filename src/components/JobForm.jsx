import React, { useState } from "react";
import API from "../services/api";

function JobForm() {

    const [job, setJob] = useState({

        title: "",
        company: "",
        description: "",
        skills: ""
    });

    const createJob = async () => {

        try {

            await API.post("/api/jobs", job);

            alert("Job Created");

        } catch (error) {

            console.error(error);

            alert("Failed");
        }
    };

    return (

        <div className="bg-white rounded-2xl shadow-md p-8">

            <h2 className="text-2xl font-bold mb-6">
                Create Job
            </h2>

            <div className="space-y-4">

                <input
                    placeholder="Job Title"
                    className="w-full border rounded-xl p-4"
                    onChange={(e) =>
                        setJob({
                            ...job,
                            title: e.target.value
                        })
                    }
                />

                <input
                    placeholder="Company"
                    className="w-full border rounded-xl p-4"
                    onChange={(e) =>
                        setJob({
                            ...job,
                            company: e.target.value
                        })
                    }
                />

                <textarea
                    placeholder="Job Description"
                    rows="5"
                    className="w-full border rounded-xl p-4"
                    onChange={(e) =>
                        setJob({
                            ...job,
                            description: e.target.value
                        })
                    }
                />

                <input
                    placeholder="Skills (Java, AWS, Docker)"
                    className="w-full border rounded-xl p-4"
                    onChange={(e) =>
                        setJob({
                            ...job,
                            skills: e.target.value
                        })
                    }
                />

                <button
                    onClick={createJob}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl transition"
                >
                    Save Job
                </button>

            </div>

        </div>
    );
}

export default JobForm;