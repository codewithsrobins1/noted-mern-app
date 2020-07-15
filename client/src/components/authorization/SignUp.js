import React from 'react'

import formImg1 from '../../images/signUpImg.svg'


function SignUp() {
    return (
        <section className="signUp-form-section">
            <div className="form-container">
                <img className="form-container__image" src={formImg1} alt="putting notes together"/>

                <h2 className="form-container__header heading">Create Account</h2>

                <form className="signup-form" action="">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" />

                    <label htmlFor="passwordConfirmation">Password Confirmation:</label>
                    <input type="password" id="passwordConfirmation" />

                    <input id="sendBtn" type="submit" value="Submit"/>
                </form>
            </div>
        </section>

    )
}

export default SignUp
