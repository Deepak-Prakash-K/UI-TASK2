import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../Css/Requistion Details.css"

const RequisitionDetails = () => {
    const navigate = useNavigate();
    const [position, setPosition] = useState('');
    const [vacancy, setVacancy] = useState('');
    const [gender, setGender] = useState('');
    const [urgency, setUrgency] = useState('');
    const [errors, setErrors] = useState({
        position: false,
        vacancy: false,
        gender: false,
        urgency: false,
    });

    const next = (e) => {
        e.preventDefault();

        const newErrors = {
            position: position.trim() === '',
            vacancy: isNaN(vacancy) || vacancy.trim() === '',
            gender: gender === '',
            urgency: urgency === '',
        };

        setErrors(newErrors);

        if (!Object.values(newErrors).some(Boolean)) {
            navigate('/emp');
        }
    }

    return (
        <div className="main-div">
            <form>
                <label htmlFor="position">Requisition Details</label><br />
                <input type="text" name="tile" id="position" placeholder="Enter Requisition title" value={position} onChange={(e) => setPosition(e.target.value)} /><br />
                {errors.position && <span className="error">Requisition title is required</span>}<br />

                <label htmlFor="vacancy">Number of openings</label><br />
                <input type="text" name="openings" id="vacancy" value={vacancy} onChange={(e) => setVacancy(e.target.value)} /><br />
                {errors.vacancy && <span className="error">Enter a valid number</span>}<br />

                <label htmlFor="gender">Gender</label><br />
                <select name="gender" id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option disabled value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Non Binary">Non Binary</option>
                </select><br />
                {errors.gender && <span className="error">Gender is required</span>}<br />

                <label htmlFor="time">Urgency</label><br />
                <select name="joining" id="time" value={urgency} onChange={(e) => setUrgency(e.target.value)}>
                    <option disabled value="">Select urgency</option>
                    <option value="Urgent">Urgent</option>
                    <option value="Immediate joining">Immediate joining</option>
                    <option value="Relaxed">Relaxed</option>
                </select><br />
                {errors.urgency && <span className="error">Urgency is required</span>}<br />
            </form>
            <button id="next-button" onClick={next}><span id="next-text">Next</span></button>
        </div>
    )
}

export default RequisitionDetails;
