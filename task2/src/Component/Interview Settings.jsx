import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../Css/Interview Settings.css"

const InterviewSetting = () => {
    const navigate = useNavigate();
    const [interviewMode, setInterviewMode] = useState('');
    const [interviewDuration, setInterviewDuration] = useState('');
    const [interviewLanguage, setInterviewLanguage] = useState('');
    const [errors, setErrors] = useState({
        interviewMode: false,
        interviewDuration: false,
        interviewLanguage: false,
    });

    const previous = () => {
        navigate('/emp');
    };

    const submit = () => {
        const newErrors = {
            interviewMode: interviewMode === '',
            interviewDuration: interviewDuration === '',
            interviewLanguage: interviewLanguage === '',
        };

        setErrors(newErrors);

        if (!Object.values(newErrors).some(Boolean)) {
            alert("Submitted Successfully");
            navigate('/');
        }
    };

    return (
        <div>
            <form>
                <label htmlFor="mode">Interview Mode</label><br />
                <select name="interview" id="mode" value={interviewMode} onChange={(e) => setInterviewMode(e.target.value)}>
                    <option disabled={true} value="">Select interview mode</option>
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                </select><br />
                {errors.interviewMode && <span className="error">Interview mode is required</span>}<br />

                <label htmlFor="duration">Interview Duration</label><br />
                <select name="timings" id="duration" value={interviewDuration} onChange={(e) => setInterviewDuration(e.target.value)}>
                    <option disabled={true} value="">Select interview duration</option>
                    <option value="Short">Short</option>
                    <option value="Medium">Medium</option>
                    <option value="Long">Long</option>
                </select><br />
                {errors.interviewDuration && <span className="error">Interview duration is required</span>}<br />

                <label htmlFor="area">Interview Language</label><br />
                <select name="location" id="area" value={interviewLanguage} onChange={(e) => setInterviewLanguage(e.target.value)}>
                    <option disabled={true} value="">Select interview language</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                </select><br />
                {errors.interviewLanguage && <span className="error">Interview language is required</span>}<br />
            </form>

            <button id="p-button" onClick={previous}><span id="previous-text">Previous</span></button>
            <button id="submit-button" onClick={submit}><span id="submit-text">Submit</span></button>
        </div>
    );
};

export default InterviewSetting;
