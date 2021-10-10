import React from "react";

class PersonalInfo extends React.Component{

    

    constructor(props){
        super(props);
        this.handler = this.handler.bind(this);
    }

    handler( event, funct ) {
        funct( event.target.value);
    }

    render() {
        const {setFirstName, setLastName, setTitle, setAddress, setPhoneNumber, setEmail, 
            setDescription, currentState} = this.props;
        return (
            <div className = "personal-info"> 
                <h1 className ="editor-header">Personal Info</h1>
                <input type = "text" placeholder = "First name" onChange = {(e) => {this.handler( e, setFirstName)}} value = {currentState.firstName}></input>
                <input type = "text" placeholder = "Last name" onChange = {(e) => {this.handler( e, setLastName)}}value = {currentState.lastName}></input>
                {/*add photo option here? */}
                <input type = "text" placeholder = "Title" onChange = {(e) => {this.handler( e, setTitle)}} value = {currentState.title}></input>
                <input type = "text" placeholder = "Address" onChange = {(e) => {this.handler( e, setAddress)}} value = {currentState.address}></input>
                <input type = "text" placeholder = "Phone number" onChange = {(e) => {this.handler( e, setPhoneNumber)}} value = {currentState.phoneNumber}></input>
                <input type = "text" placeholder = "Email" onChange = {(e) => {this.handler( e, setEmail)}} value = {currentState.email}></input>
                <input type = "text" placeholder = "Description" onChange = {(e) => {this.handler( e, setDescription)}} value = {currentState.description}></input>

            </div>
        );
    }
}

export default PersonalInfo;