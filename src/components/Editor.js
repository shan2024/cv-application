import React from "react";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import "../styles/Editor.css";

class Editor extends React.Component{


    constructor(props){
        super(props);
        
        this.printDiv = this.printDiv.bind(this);
    }
    
    printDiv() {
        window.print();
  
    }

    render() {
        const {setFirstName, setLastName, setTitle, setAddress, setPhoneNumber, setEmail, 
            setDescription, educationList, experienceList, addEducationList, addExperienceList, updateEducationList
        , updateExperienceList ,deleteEducationList, deleteExperienceList, clearAll, currentState} = this.props;

        return (
            <div className = "editor"> 
                <PersonalInfo setFirstName = {setFirstName}
                    setLastName = {setLastName}
                    setTitle = {setTitle}
                    setAddress = {setAddress}
                    setPhoneNumber = {setPhoneNumber}
                    setEmail = {setEmail}
                    setDescription = {setDescription}
                    currentState = {currentState}
                />
                <Education 
                    educationList = {educationList}
                    addEducationList = {addEducationList}
                    updateEducationList = {updateEducationList}
                    deleteEducationList = {deleteEducationList}
                />

                <Experience 
                    experienceList ={ experienceList}
                    addExperienceList = {addExperienceList}
                    updateExperienceList = {updateExperienceList}
                    deleteExperienceList = {deleteExperienceList}

                />
                <button className = "pdf-button" onClick = {this.printDiv}>PDF</button>
                <button className = "clear-button" onClick = {clearAll}>Clear</button>

            </div>
        );
    }
}

export default Editor;