import React from "react";

class ExperienceInputList extends React.Component{


    constructor(props){
        super(props);
        this.updateExperience = this.updateExperience.bind(this);
        this.deleteExperience = this.deleteExperience.bind(this);
    }

    deleteExperience( uniqid, func) {
        func(uniqid);
    }

    updateExperience( event, experienceItem, uniqid, key, func) {
        experienceItem[key] = event.target.value;
        func( experienceItem, uniqid);
    }    
    render() {
        const {experienceList, updateExperienceList , deleteExperienceList} = this.props;

        return (
            <div className = "experience-input-list">
                {experienceList.map( (experienceItem) => {
                    return <div className = "experience-inputs" key = {experienceItem.uniqid}>
                            <input type = "text" placeholder = "Company" defaultValue = {experienceItem["company"]} 
                            onChange = {(e) => { this.updateExperience(e, experienceItem, experienceItem.uniqid, "company", updateExperienceList) }}/>
                            <input type = "text" placeholder = "Position" defaultValue = {experienceItem["position"]}
                            onChange = {(e) => { this.updateExperience(e, experienceItem, experienceItem.uniqid, "position", updateExperienceList) }}/>
                            <input type = "text" placeholder = "City" defaultValue = {experienceItem["city"]}
                            onChange = {(e) => { this.updateExperience(e, experienceItem, experienceItem.uniqid, "city", updateExperienceList) }}/>
                            <input type = "text" placeholder = "From" defaultValue = {experienceItem["from"]}
                            onChange = {(e) => { this.updateExperience(e, experienceItem, experienceItem.uniqid, "from", updateExperienceList) }}/>
                            <input type = "text" placeholder = "To" defaultValue = {experienceItem["to"]}
                            onChange = {(e) => { this.updateExperience(e, experienceItem, experienceItem.uniqid, "to", updateExperienceList) }}/>
                            <button className = "delete-button" onClick = { (e) => {this.deleteExperience(experienceItem.uniqid, deleteExperienceList)} }>Delete</button>
                    </div>;
                })} 
                
            </div>
        );
    }
}

export default ExperienceInputList;