import React from "react";
import "../App.css";

const Feedback = (props) => {
   
    return (

        <div className="feedback">
                <div className="">
                    <h2 className="feedbackhead">Submitted Details</h2>

                    <h5>Name of Customer</h5>
                    <p>{props.feedbackDetails.fullName}</p>

                    <h5>Email</h5>
                    <p>{props.feedbackDetails.email}</p>

                    <h5>Number</h5>
                    <p>{props.feedbackDetails.number}</p>

                    <h5>Reason</h5>
                    <p>{props.feedbackDetails.reason}</p>

                    <h5>Description</h5>
                    <p>{props.feedbackDetails.description}</p>
                </div>
        </div>
    )

}

export default Feedback;