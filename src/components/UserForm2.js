import React, { useState } from 'react';

const UserForm2 = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // const handleSubmitForm = (e) => {
    //     e.preventDefault();
    // }

    return (
        <form>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                {/* {firstName.length < 2 ? <p>The first name must be at least 2 characters</p> : firstName.length < 1 ? null : null} */}
                {(() => {
                    if (firstName.length < 1) {
                        return (
                            <p></p>
                        )
                    } else if (firstName.length < 2 && firstName.length == 1) {
                        return (
                            <p>First name must be at least two letters</p>
                        )
                    } else {
                        return (
                            null
                        )
                    }
                })()}
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={(e) => setLastName(e.target.value)} />
                {/* {lastName.length < 2 ? <p>The last name must be at least 2 characters</p> : null} */}
                {(() => {
                    if (lastName.length < 1) {
                        return (
                            <p></p>
                        )
                    } else if (lastName.length < 2 && lastName.length == 1) {
                        return (
                            <p>Last name must be at least two letters</p>
                        )
                    } else {
                        return (
                            null
                        )
                    }
                })()}
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
                {/* {email.length < 5 ? <p>The email must be at least 5 characters</p> : null} */}
                {(() => {
                    if (email.length < 1) {
                        return (
                            <p></p>
                        )
                    } else if (email.length < 5) {
                        return (
                            <p>Email must be at least 5 letters</p>
                        )
                    } else {
                        return (
                            null
                        )
                    }
                })()}
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
                {/* {password.length < 8 ? <p>The password must be at least 8 characters</p> : null} */}
                {(() => {
                    if (password.length < 1) {
                        return (
                            <p></p>
                        )
                    } else if (password.length < 8) {
                        return (
                            <p>Password must be at least 8 letters</p>
                        )
                    } else {
                        return (
                            null
                        )
                    }
                })()}
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} />
                {confirmPassword !== password ? <p>The passwords do not match</p> : null}
            </div>
            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </form>
    );//end return
};//end userform2

export default UserForm2;