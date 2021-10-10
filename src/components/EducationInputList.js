import React from "react";

class EducationInputList extends React.Component{


    constructor(props){
        super(props);
        this.updateEducation = this.updateEducation.bind(this);
        this.deleteEducation = this.deleteEducation.bind(this);
    }

    deleteEducation( uniqid, func) {
        func(uniqid);
    }

    updateEducation( event, educationItem, uniqid, key, func) {
        educationItem[key] = event.target.value;
        func( educationItem, uniqid);
    }    
    render() {
        const {educationList, updateEducationList, deleteEducationList} = this.props;

        return (
            <div className = "education-input-list">
                {educationList.map( (educationItem) => {
                    return <div className = "education-inputs" key = {educationItem.uniqid}>
                            <input type = "text" placeholder = "Institution" defaultValue = {educationItem["institution"]} 
                            onChange = {(e) => { this.updateEducation(e, educationItem, educationItem.uniqid, "institution", updateEducationList) }}/>
                            <input type = "text" placeholder = "City" defaultValue = {educationItem["city"]}
                            onChange = {(e) => { this.updateEducation(e, educationItem, educationItem.uniqid, "city", updateEducationList) }}/>
                            <input type = "text" placeholder = "Degree" defaultValue = {educationItem["degree"]}
                            onChange = {(e) => { this.updateEducation(e, educationItem, educationItem.uniqid, "degree", updateEducationList) }}/>
                            <input type = "text" placeholder = "Major" defaultValue = {educationItem["major"]}
                            onChange = {(e) => { this.updateEducation(e, educationItem, educationItem.uniqid, "major", updateEducationList) }}/>
                            <input type = "text" placeholder = "From" defaultValue = {educationItem["from"]}
                            onChange = {(e) => { this.updateEducation(e, educationItem, educationItem.uniqid, "from", updateEducationList) }}/>
                            <input type = "text" placeholder = "To" defaultValue = {educationItem["to"]}
                            onChange = {(e) => { this.updateEducation(e, educationItem, educationItem.uniqid, "to", updateEducationList) }}/>
                            <button className = "delete-button" onClick = { (e) => { this.deleteEducation( educationItem.uniqid, deleteEducationList)} }>Delete</button>
                    </div>;
                })} 
                
            </div>
        );
    }
}

export default EducationInputList;