import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../Css/Job Details.css";

const JobDetails = () => {
    const navigate = useNavigate();
    const [jobTitle, setJobTitle] = useState('');
    const [jobDetails, setJobDetails] = useState('');
    const [jobLocation, setJobLocation] = useState('');
    const [errors, setErrors] = useState({
        jobTitle: false,
        jobDetails: false,
        jobLocation: false,
    });

    const previous = () => {
        navigate('/');
    };

    const next = () => {
        const newErrors = {
            jobTitle: jobTitle.trim() === '',
            jobDetails: jobDetails.trim() === '',
            jobLocation: jobLocation.trim() === '',
        };

        setErrors(newErrors);

        if (!Object.values(newErrors).some(Boolean)) {
            navigate('/prj');
        }
    };

    return (
        <div>
            <form>
                <label htmlFor="title">Job Title</label><br />
                <input type="text" name="job" id="title" placeholder="Enter job title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} /> <br />
                {errors.jobTitle && <span className="error">Job title is required</span>}<br />

                <label htmlFor="details">Requisition Details</label><br />
                <input type="text" name="description"  id="details" placeholder="Enter job details" value={jobDetails} onChange={(e) => setJobDetails(e.target.value)}/> <br />
                {errors.jobDetails && <span className="error">Job details are required</span>}<br />

                <label htmlFor="location">Job Location</label><br />
                <input type="text" name="area" id="location" placeholder="Enter job location" value={jobLocation} onChange={(e) => setJobLocation(e.target.value)} /> <br />
                {errors.jobLocation && <span className="error">Job location is required</span>}<br />
            </form>

            <button id="previous-button" onClick={previous}><span id="previous-text">Previous</span></button>
            <button id="after-button" onClick={next}><span id="after-text">Next</span></button>
        </div>
    );
};

export default JobDetails;