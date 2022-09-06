import React from "react";
import Input from "./input";
import Select from "./select";
import TextArea from "./textarea";
import Button from "./button";
import Feedback from "./feedback";

class CompliantsForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            fullName: "",
            email: "",
            number: "",
            reason: "",
            reasonOptions: [
                "My account was debited erroneously",
                "My card is expired",
                "My transaction failed",
                "Others"
            ],
            description: "",
            feedbackDetails: null
        };

    }

    handleInputChange = (event) => {
        this.setState({[event.target.name] : event.target.value})
    };

    handleCompliantSubmission = (event) => {
        event.preventDefault();

        const {fullName, email, number, reason, description} = this.state;

        const feedbackDetails = {
            fullName: fullName,
            email: email,
            number: number,
            reason: reason,
            description: description,
        };

        if(fullName !=="" &&
           email !=="" &&
           reason !=="" &&
           number !=="" &&
           description !==""
           ) {
                
        this.setState({feedbackDetails: feedbackDetails, 
            showFeedbackDetails: true})
           }

        console.log({feedbackDetails})

    }

    handleFormReset = (event) => {
        event.preventDefault();

        this.setState({ fullName: "",
                        email: "",
                        number: "",
                        reason: "",
                        description: "",
                        showFeedbackDetails: false,

    })
    }

    render() {
        return (
            <div className="row mt-4">
                
                <form>
                    <Input name="fullName"
                           title="Full Name"
                           inputType="text"
                           placeholder="Enter your full name"
                           handleChange={this.handleInputChange}
                           value={this.state.fullName}
                    />
                    <br/>
                    <Input name="email"
                           title="Email"
                           inputType="text"
                           placeholder="Enter your email address"
                           handleChange={this.handleInputChange}
                           value={this.state.email}
                    />
                    <br/>
                    <Input name="number"
                           title="Number"
                           inputType="number"
                           placeholder="Enter your number"
                           handleChange={this.handleInputChange}
                           value={this.state.number}
                    />
                    <br/>
                    <Select title="Reason for Contact"
                            name="reason"
                            value={this.state.reason}
                            options={this.state.reasonOptions}
                            handleChange={this.handleInputChange}
                            placeholder="Select a reason"
                    />
                    <br/>
                    <TextArea title="Description"
                              name="description"
                              rows={5}
                              cols={10}
                              value={this.state.description}
                              handleChange={this.handleInputChange}
                              placeholder="Enter a description"
                    />
                    <br/>
                    <Button title="Submit compliants"
                            backgroundColor="#0d5d70"
                            color="#ffffff"
                            onButtonClick={this.handleCompliantSubmission}
                    />

                    <Button title="Reset Form"
                            backgroundColor="#7f8c8d"
                            color="#ffffff"
                            onButtonClick={this.handleFormReset}
                    />
                </form>

                {this.state.showFeedbackDetails && (
                <div className="col-md-6">
                <Feedback feedbackDetails={this.state.feedbackDetails}/>
                </div>
                )}

            </div>
        );
    }
}

export default CompliantsForm;