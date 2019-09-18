import React, { useState, useEffect } from "react";
import styled from "styled-components";

const UserForm = styled.form`
    background: pink;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 40%;

    input {
        margin: 5px 0 5px 5px;
    }

    label {
        margin-left: 5px; 
    }
`;


const Form = props => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        role: ''
    })

    useEffect(() => {
        setUser(props.memberToEdit)
    }, [props.memberToEdit]);

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setUser({...user, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setUser({
            name: '',
            email: '',
            role: ''
        });
        props.setTeamList([...props.teamList, user])
    };
 
    return (
        <UserForm onSubmit={(event) => handleSubmit(event)}>
            <label>
                Name:
                <input 
                    onChange={(event) => handleChange(event)}
                    name="name"
                    type="text" 
                    value={user.name} 
                />
            </label>
            <label>
                Email:
                <input 
                    onChange={(event) => handleChange(event)}
                    name="email" 
                    type="email" 
                    value={user.email} 
                />
            </label>
            <label>
                Role:
                <input 
                    onChange={(event) => handleChange(event)}
                    name="role" 
                    type="text" 
                    value={user.role} 
                />
            </label>
            <button>Submit!</button>
        </UserForm>
    );   
}

export default Form;