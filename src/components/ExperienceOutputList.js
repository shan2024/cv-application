import React from "react";

class ExperienceOutputList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {experienceList} = this.props;
        return (
            <div> 
                {experienceList.map((experienceItem) => {
                    return (
                        <div className = "experience-item" key = {experienceItem.uniqid}>
                            <div className = "date">
                                <p><b>{experienceItem["from"] + " - " +experienceItem["to"]}</b></p>
                            </div>
                            <div className = "job-info">
                                <h4>{experienceItem["company"] + ', ' + experienceItem["city"]}</h4>
                                <p>Position: {experienceItem["position"]}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default ExperienceOutputList;