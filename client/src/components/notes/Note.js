import React from 'react'
import { Link } from 'react-router-dom';

function Note() {
    return (
        <section className="note-details-section">
            <div className="notes-index-container">
                <div className="notes-index-heading heading">
                    <h1>Flex Box and Grid Tutorial</h1>
                </div>
            
                <div className="note-details">
                    <h3 className="note-details__about">About: <span>How to use flexbox and grid</span></h3>
                    <h3 className="note-details__link">Link: 
                        <a href="https://www.youtube.com/watch?v=er1JEDuPbZQ">
                            <span className="note-details__link--blue"> https://www.youtube.com/watch?v=er1JEDuPbZQ</span>
                        </a>
                    </h3>
                    <h3 className="note-details__note">Note:</h3>
                    <p className="note-details__description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea possimus repellendus esse natus voluptatum.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea possimus repellendus esse natus voluptatum.
                    </p>
                    <div className="note-details__buttons">
                        <Link exact to="/editnote">
                            <button className="note-details__buttons-button edit">Edit</button>
                        </Link>
                        <Link exact to="/notesindex">
                            <button className="note-details__buttons-button delete">Delete</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Note
