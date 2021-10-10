import React from "react";

class PreviewHeader extends React.Component{


    constructor(props){
        super(props);
    }

    render() {
        const {firstName, lastName, title} = this.props;
        return (
            <div className = "preview-header"> 
                <h1 className = "preview-name">{firstName + " "+lastName}</h1>
                <h1 className = "preview-title">{title}</h1>
            </div>
        );
    }
}

export default PreviewHeader;