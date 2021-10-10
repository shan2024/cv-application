import React from "react";
import EducationListOutput from "./EducationOutputList";
import ExperienceOutputList from "./ExperienceOutputList";

class PreviewMain extends React.Component{


    constructor(props){
        super(props);
    }

    render() {
        const { description, educationList, experienceList} = this.props;
        return (
            <div className = "preview-main">
                <h2 className = "preview-subtitle" id = "about-me">About Me</h2> 
                <p className ="description">{description}</p>
                <h2 className = "preview-subtitle">Education</h2>
                <EducationListOutput educationList = {educationList}/>
                <h2 className = "preview-subtitle">Experience</h2>
                <ExperienceOutputList experienceList = {experienceList}/>
            </div>
        );
    }
}

export default PreviewMain;