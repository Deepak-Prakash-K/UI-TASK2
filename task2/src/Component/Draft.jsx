import React from "react";
import "../Css/Draft.css"
const draft = () => {
    return(
        <div className="second-div">
                <div className="head-div">
                    <span>Draft</span>
                    <button id="p-button"><span id="p-text">Preview</span></button>
                </div>
                <div id="o-div">
                    <p id="open">OPENINGS 0</p>
                </div>
                <div id="rd-div">
                    <h3>Requisition Details</h3>
                    <div id="r-div">
                        <div id="u-div">
                            <p>Urgency</p>
                            <p>-</p>
                        </div>
                        <div id="g-div">
                            <p>Gender</p>
                            <p>-</p>
                        </div>
                    </div>
                </div>
                <div className="jd-div">
                    <h3>Job Detail</h3>
                    <div id="j-div">
                        <div id="t-div">
                            <p>Job Title</p>
                            <p>-</p>
                        </div>
                        <div id="d-div">
                            <p>Job Details</p>
                            <p>-</p>
                        </div>
                    </div>
                    <div>
                    <p>Job Location</p>
                    <p>-</p>
                    </div>
                </div>
                <div className="is-div">
                    <h3>Interview Settings</h3>
                    <div id="i-div">
                        <div id="id-div">
                            <p>Interview Duration</p>
                            <p>-</p>
                        </div>
                        <div id="l-div">
                            <p>Interview Language</p>
                            <p>-</p>
                        </div>
                    </div>
                    <div>
                    <p>Interview Mode</p>
                    <p>-</p>
                    </div>
                </div>

            </div>

    )
}
export default draft;