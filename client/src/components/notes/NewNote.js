import React from 'react'

function NewNote() {
    return (
        <section className="notes-index">
            <div className="notes-index-container">
                <div className="notes-index-heading heading">
                    <h1>New Note</h1>
                </div>

                <div className="form-container-newNote">
                    <h2 className="form-container__header--new heading">Create a new note</h2>

                    <form className="signup-form" action="">
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" required/>

                        <label htmlFor="about">About:</label>
                        <input type="text" id="about" required/>

                        <label htmlFor="link">Link:</label>
                        <input type="text" id="link" required/>

                        <label htmlFor="notes">Notes:</label>
                        <textarea type="text" id="notes">Write your note...</textarea>
                        

                        <input id="sendBtn" type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default NewNote






