import React from "react";
import uniqid from "uniqid";
import EducationInputList from "./EducationInputList";

class Education extends React.Component{


    constructor(props){
        super(props);
        this.addEducation = this.addEducation.bind(this);
    }

    addEducation(func) {
        //create education input object
        let educationInput = {
            institution: "",
            city : '',
            degree:'',
            major:'',
            from:'',
            to:'' ,
            uniqid: uniqid(), 
        }
        func( educationInput);
    }

    render() {
        const {educationList, addEducationList, updateEducationList , deleteEducationList} = this.props;
        return (
            <div className = "education"> 
                <h1 className = "editor-header">Education</h1>
                {/*list of educatoin inputs*/}
                <EducationInputList educationList = {educationList } updateEducationList = {updateEducationList }
                deleteEducationList = {deleteEducationList} />
                <button className = "add-button" onClick = {addEducationList}>Add</button>
            </div>
        );
    }
}

export default Education;