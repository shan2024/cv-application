import React from "react";

class EducationListOutput extends React.Component{


    constructor(props){
        super(props);
    }

    render() {
        const {educationList} = this.props;
        return (
            <div> 
                {educationList.map((educationItem) => {
                    return (
                        <div className = "college-item" key = {educationItem.uniqid}>
                            <div className = "date">
                                <p><b>{educationItem["from"] + " - " +educationItem["to"]}</b></p>
                            </div>
                            <div className = "college-info">
                                <h4>{educationItem["institution"] + ', ' + educationItem["city"]}</h4>
                                <p >Degree: {educationItem["degree"]}</p>
                                <p>Major: {educationItem["major"]}</p>
                            </div>
                           
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default EducationListOutput;