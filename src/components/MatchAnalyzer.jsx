import React, {
    useEffect,
    useState
} from "react";

import API from "../services/api";

function MatchAnalyzer() {

    const [resumes, setResumes] =
        useState([]);

    const [jobs, setJobs] =
        useState([]);

    const [resumeId, setResumeId] =
        useState("");

    const [jobId, setJobId] =
        useState("");

    const [analysis, setAnalysis] =
        useState(null);

    const [loading, setLoading] =
        useState(false);

    useEffect(() => {

        loadResumes();

        loadJobs();

    }, []);

    const loadResumes = async () => {

        try {

            const response =
                await API.get("/api/resume");

            setResumes(response.data);

        } catch (error) {

            console.error(
                "Failed to load resumes",
                error
            );
        }
    };

    const loadJobs = async () => {

        try {

            const response =
                await API.get("/api/jobs");

            setJobs(response.data);

        } catch (error) {

            console.error(
                "Failed to load jobs",
                error
            );
        }
    };

    const matchResume = async () => {

        if (!resumeId || !jobId) {

            alert(
                "Please select both resume and job"
            );

            return;
        }

        try {

            setLoading(true);

            const response = await API.get(

                `/api/resume/match/${resumeId}/job/${jobId}`
            );

            console.log(response.data);
            setAnalysis(response.data);

        } catch (error) {

            console.error(
                "Match analysis failed",
                error
            );

            alert(
                "Failed to analyze resume"
            );

        } finally {

            setLoading(false);
        }
    };

    return (

        <div className="bg-white rounded-3xl shadow-xl p-10">

            <div className="mb-8">

                <h2 className="text-4xl font-bold text-gray-800">

                    AI Resume Match Analyzer

                </h2>

                <p className="text-gray-500 mt-3 text-lg">

                    Compare resumes against job descriptions using AI-powered semantic analysis.

                </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <select
                    className="border border-gray-300 rounded-2xl p-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) =>
                        setResumeId(e.target.value)
                    }
                >

                    <option value="">
                        Select Resume
                    </option>

                    {
                        resumes.map((resume) => (

                            <option
                                key={resume.id}
                                value={resume.id}
                            >
                                {resume.fileName}
                            </option>
                        ))
                    }

                </select>

                <select
                    className="border border-gray-300 rounded-2xl p-4 text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    onChange={(e) =>
                        setJobId(e.target.value)
                    }
                >

                    <option value="">
                        Select Job
                    </option>

                    {
                        jobs.map((job) => (

                            <option
                                key={job.id}
                                value={job.id}
                            >
                                {job.title}
                            </option>
                        ))
                    }

                </select>

            </div>

            <button
                onClick={matchResume}
                disabled={loading}
                className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all shadow-lg"
            >

                {
                    loading
                        ? "Analyzing..."
                        : "Analyze Match"
                }

            </button>

            {
                analysis && (

                    <div className="mt-12">

                        {/* SCORE CARDS */}

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                            <div className="bg-blue-50 rounded-2xl p-8 shadow">

                                <h3 className="text-lg font-semibold text-gray-700">

                                    Match Score

                                </h3>

                                <p className="text-5xl font-bold text-blue-600 mt-4">

                                    {analysis.match_score}%

                                </p>

                            </div>

                            <div className="bg-green-50 rounded-2xl p-8 shadow">

                                <h3 className="text-lg font-semibold text-gray-700">

                                    Semantic Score

                                </h3>

                                <p className="text-5xl font-bold text-green-600 mt-4">

                                    {analysis.semantic_score}%

                                </p>

                            </div>

                            <div className="bg-purple-50 rounded-2xl p-8 shadow">

                                <h3 className="text-lg font-semibold text-gray-700">

                                    Alignment Score

                                </h3>

                                <p className="text-5xl font-bold text-purple-600 mt-4">

                                    {analysis.alignment_score}%

                                </p>

                            </div>

                        </div>

                        {/* MATCHED SKILLS */}

                        <div className="mt-10 bg-green-50 rounded-2xl p-8 shadow">

                            <h3 className="text-2xl font-bold text-green-700 mb-6">

                                Matched Skills

                            </h3>

                            <div className="flex flex-wrap gap-3">

                                {
                                    analysis.matched_skills?.map(

                                        (skill, index) => (

                                            <span
                                                key={index}
                                                className="bg-green-200 text-green-800 px-4 py-2 rounded-full font-medium"
                                            >
                                                {skill}
                                            </span>
                                        )
                                    )
                                }

                            </div>

                        </div>

                        {/* MISSING SKILLS */}

                        <div className="mt-10 bg-red-50 rounded-2xl p-8 shadow">

                            <h3 className="text-2xl font-bold text-red-700 mb-6">

                                Missing Skills

                            </h3>

                            <div className="flex flex-wrap gap-3">

                                {
                                    analysis.missing_skills?.map(

                                        (skill, index) => (

                                            <span
                                                key={index}
                                                className="bg-red-200 text-red-800 px-4 py-2 rounded-full font-medium"
                                            >
                                                {skill}
                                            </span>
                                        )
                                    )
                                }

                            </div>

                        </div>

                        {/* AI RECOMMENDATIONS */}

                        <div className="mt-10 bg-gray-50 rounded-2xl p-8 shadow">

                            <h3 className="text-2xl font-bold text-indigo-700 mb-6">

                                AI Recommendations

                            </h3>

                            <div className="whitespace-pre-line leading-8 text-gray-700 text-lg">

                                {analysis.ai_recommendations}

                            </div>

                        </div>

                    </div>
                )
            }

        </div>
    );
}

export default MatchAnalyzer;