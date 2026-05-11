import React, { useState } from "react";
import API from "../services/api";
import { FaUpload } from "react-icons/fa";

function ResumeUpload() {

    const [file, setFile] = useState(null);

    const uploadResume = async () => {

        if (!file) {

            alert("Please select a file");
            return;
        }

        const formData = new FormData();

        formData.append("file", file);

        try {

            await API.post(
                "/api/resume/upload",
                formData
            );

            alert("Resume Uploaded Successfully");

        } catch (error) {

            console.error(error);

            alert("Upload Failed");
        }
    };

    return (

        <div className="bg-white rounded-2xl shadow-md p-8">

            <h2 className="text-2xl font-bold mb-6">
                Upload Resume
            </h2>

            <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center">

                <input
                    type="file"
                    onChange={(e) =>
                        setFile(e.target.files[0])
                    }
                    className="mb-6"
                />

                <button
                    onClick={uploadResume}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center gap-3 mx-auto transition"
                >
                    <FaUpload />
                    Upload Resume
                </button>

            </div>

        </div>
    );
}

export default ResumeUpload;