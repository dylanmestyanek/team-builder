import React, { useState } from "react";

import Form from "./Form";

const Member = ({ member }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState(member);

    const editMember = (member) => {
        setIsEditing(false);
        setUser(member);
    }

    console.log(user)
    return(
        !isEditing ? 
        <div>
                <p>Name: {user.name}</p>
                <p>E-Mail: {user.email}</p>
                <p>Role: {user.role} </p>
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </div>
        :   <Form editMember={editMember} member={member} />

        
    );
};

export default Member;