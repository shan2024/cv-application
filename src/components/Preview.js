import React from "react";
import PreviewHeader from "./PreviewHeader";
import PreviewMain from "./PreviewMain";
import PreviewPersonal from "./PreviewPersonal";
import "../styles/Preview.css";


class Preview extends React.Component{


    constructor(props){
        super(props);
    }

    render() {
        const {firstName, lastName, title, address, phoneNumber, email, 
            description, educationList, experienceList} = this.props;
        return (
            <div className = "preview" id = "preview"> 
                <PreviewHeader firstName = {firstName}
                                lastName = {lastName}
                                title = {title}
                />
                <PreviewPersonal address = {address}
                                phoneNumber = {phoneNumber}
                                email = {email}
                />
                <PreviewMain description = {description}
                            educationList = {educationList}
                            experienceList = {experienceList}
                />
                
            </div>
        );
    }
}

export default Preview;