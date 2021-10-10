import React from "react";
import Editor from "./Editor";
import Preview from "./Preview";
import uniqid from "uniqid";
import update from 'immutability-helper';
import "../styles/Body.css";

class Body extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName:'',
            lastName:'',
            title:'',
            address:'',
            phoneNumber:'',
            email:'',
            description:'',
            educationList: [],
            experienceList: [],
            //Preview must also know the education and experience lists
        }

        this.setFirstName = this.setFirstName.bind(this);
        this.setLastName = this.setLastName.bind(this);
        this.setTitle = this.setTitle.bind(this);
        this.setAddress = this.setAddress.bind(this);
        this.setPhoneNumber = this.setPhoneNumber.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setDescription = this.setDescription.bind(this);
        this.addEducationList = this.addEducationList.bind(this);
        this.addExperienceList = this.addExperienceList.bind(this);
        this.updateEducationList = this.updateEducationList.bind(this);
        this.updateExperienceList = this.updateExperienceList.bind(this);
        this.deleteEducationList = this.deleteEducationList.bind(this);
        this.deleteExperienceList = this.deleteExperienceList.bind(this);
        this.clearAll = this.clearAll.bind(this);

    }


    setFirstName( inputFirstName ) {
        this.setState( {
            firstName:inputFirstName,
        })
    }

    setLastName( inputLastName ) {
        this.setState( {
            lastName:inputLastName,
        })
    }

    setTitle( inputTitle ) {
        this.setState( {
            title:inputTitle,
        })
    }

    setAddress( inputAddress ) {
        this.setState( {
            address:inputAddress,
        })
    }
    setPhoneNumber( inputPhoneNumber ) {
        this.setState( {
            phoneNumber:inputPhoneNumber,
        })
    }
    setEmail( inputEmail ) {
        this.setState( {
            email:inputEmail,
        })
    }

    setDescription( inputDescription) {
        this.setState({
            description:inputDescription,
        })
    }

    addEducationList(  ) {
        let educationInput = {
            institution: "",
            city : '',
            degree:'',
            major:'',
            from:'',
            to:'' ,
            uniqid: uniqid(), 
        }
        this.setState({
           educationList: this.state.educationList.concat(educationInput), 
        })
    }

    addExperienceList(  ) {
        let experienceInput = {
            company: "",
            position : '',
            city:'',
            from:'',
            to:'' ,
            uniqid: uniqid(), 
        }
        this.setState({
           experienceList: this.state.experienceList.concat(experienceInput), 
        })
    }

    updateEducationList( newEducation , uniqid) {
        //find old posiiton
        console.log(this.state.educationList);
        let index = this.state.educationList.findIndex( (item) => item.uniqid === uniqid);
        let updatedEducationList = update( this.state.educationList, {$splice: [[index, 1, newEducation]]})

        this.setState( {
            educationList: updatedEducationList
        })
    }

    updateExperienceList( newExperience , uniqid) {
        let index = this.state.experienceList.findIndex( (item) => item.uniqid === uniqid);
        let updatedExperienceList = update( this.state.experienceList, {$splice: [[index, 1, newExperience]]})

        this.setState( {
            experienceList: updatedExperienceList
        })
    }

    deleteEducationList( uniqid) {
        let filteredArray = this.state.educationList.filter( item => item.uniqid != uniqid) ;

        this.setState( {
            educationList : filteredArray
        })
    }

    deleteExperienceList ( uniqid) {
        let filteredArray = this.state.experienceList.filter( item => item.uniqid != uniqid) ;

        this.setState( {
            experienceList : filteredArray
        })
    }

    clearAll() {

        this.setState({
            firstName:'',
            lastName:'',
            title:'',
            address:'',
            phoneNumber:'',
            email:'',
            description:'',
            educationList: [],
            experienceList: [],
        })
    }




    render() {
        const {firstName, lastName, title, address, phoneNumber, email, 
            description, educationList, experienceList} = this.state;
        return (
            <div className = "body">
                <Editor  setFirstName= {this.setFirstName} 
                    setLastName= {this.setLastName}
                    setTitle= {this.setTitle}
                    setAddress= {this.setAddress}
                    setPhoneNumber= {this.setPhoneNumber}
                    setEmail= {this.setEmail}
                    setDescription= {this.setDescription}
                    educationList = {educationList} 
                    experienceList ={experienceList}
                    addEducationList= {this.addEducationList}
                    addExperienceList= {this.addExperienceList}
                    updateEducationList = {this.updateEducationList}
                    updateExperienceList = {this.updateExperienceList}
                    deleteEducationList = {this.deleteEducationList}
                    deleteExperienceList = {this.deleteExperienceList}
                    clearAll = {this.clearAll}
                    currentState = {this.state}
                />
                <Preview firstName = {firstName}
                    lastName = {lastName}
                    title = {title}
                    address = {address}
                    phoneNumber = {phoneNumber}
                    email = {email}
                    description = {description}
                    educationList = {educationList}
                    experienceList = {experienceList}
                />
            </div>
            
        );
    }

}

export default Body;