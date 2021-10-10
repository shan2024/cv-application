import React from "react";
import ExperienceInputList from "./ExperienceInputList";
class Experience extends React.Component{


    constructor(props){
        super(props);
    }

    render() {
        const {experienceList, addExperienceList, updateExperienceList , deleteExperienceList} = this.props;
        return (

            <div className = "experience"> 
                <h1 className = "editor-header">Experience</h1>
                {/*list of experience inputs*/}
                <ExperienceInputList experienceList = {experienceList} updateExperienceList = {updateExperienceList}
                deleteExperienceList ={deleteExperienceList}/>
                <button className = "add-button" onClick = {addExperienceList}>Add</button>
            </div>
        );
    }
}

export default Experience;