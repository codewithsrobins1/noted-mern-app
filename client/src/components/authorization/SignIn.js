import React from 'react'

import formImg1 from '../../images/signinImg.svg'

function SignIn() {
    return (
        <section className="signIn-form-section">
            <div className="form-container">
                <img className="form-container__image" src={formImg1} alt="putting notes together"/>

                <h2 className="form-container__header heading">Sign In</h2>

                <form className="signin-form" action="">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" />

                    <input id="sendBtn" type="submit" value="Sign In"/>
                </form>
            </div>
        </section>
    )
}

export default SignIn
