import React from 'react'
import { Link } from "react-router-dom";

//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

function NotesIndex() {
    return (
        <section className="notes-index">
            <div className="notes-index-container">
                <div className="notes-index-heading heading">
                    <h1>All Notes</h1>
                    <div className="notes-index-heading__new-note">
                        <h2>New Note</h2>
                        <Link exact to="/newnote">
                            <FontAwesomeIcon className="fav-icons" icon={faPlusCircle} />
                        </Link>
                    </div>
                </div>

                <div className="notes-index-container__all-notes">
                    <Link exact to="/note">
                        <div className="notes-index-container__note">
                            <h3 className="notes-index-container__note-title heading">Flexbox and Grid</h3>
                            <p className="notes-index-container__note-date">06/20/2020</p>
                            <div className="notes-index-container__note-description">
                                <p>Tutorial on the basics of flexbox and grid</p>
                            </div>
                        </div>
                    </Link>

                    <Link exact to="/note">
                        <div className="notes-index-container__note">
                            <h3 className="notes-index-container__note-title heading">Flexbox and Grid</h3>
                            <p className="notes-index-container__note-date">06/20/2020</p>
                            <div className="notes-index-container__note-description">
                                <p>Tutorial on the basics of flexbox and grid</p>
                            </div>
                        </div>
                    </Link>

                    <Link exact to="/note">
                        <div className="notes-index-container__note">
                            <h3 className="notes-index-container__note-title heading">Flexbox and Grid</h3>
                            <p className="notes-index-container__note-date">06/20/2020</p>
                            <div className="notes-index-container__note-description">
                                <p>Tutorial on the basics of flexbox and grid</p>
                            </div>
                        </div>
                    </Link>

                    <Link exact to="/note">
                        <div className="notes-index-container__note">
                            <h3 className="notes-index-container__note-title heading">Flexbox and Grid</h3>
                            <p className="notes-index-container__note-date">06/20/2020</p>
                            <div className="notes-index-container__note-description">
                                <p>Tutorial on the basics of flexbox and grid</p>
                            </div>
                        </div>
                    </Link>
                    
                </div>
            </div>
        </section>
    )
}

export default NotesIndex
