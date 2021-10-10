import React from "react";

class PreviewPersonal extends React.Component{


    constructor(props){
        super(props);
    }

    render() {
        const { address, phoneNumber, email } = this.props;
        return (
            <div className="preview-personal"> 
                <h2 className = "preview-subtitle" id ="personal-details">Personal Details</h2>
                <p><b>Address:</b> {address}</p>
                <p><b>Phone Number:</b> {phoneNumber}</p>
                <p><b>Email:</b> {email}</p>

            </div>
        );
    }
}

export default PreviewPersonal;