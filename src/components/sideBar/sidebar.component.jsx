import React, { useState } from 'react';


const Sidebar = ({ notes, onAddNote, onDeleteNote, activeNote, setActiveNote }) => {
    return (
        <div className="app-sidebar">
            <div className="app-sidebar-header">
                <div className="sidebar-options">
                  <a href="#">
                  <img className="sidebar-img" src="img/sidebar-list.png" alt="list"/>
                 </a>  
                    <img  className="sidebar-img" src="img/sidebar-tabs.png" alt="tabs"/>
                </div>
                <div className="sidebar-remove">
                    <img  className="sidebar-img" src="img/sidebar-remove.png" alt="remove"/>
                </div>
                
            </div>
            <div className="app-sidebar-list">
                <h1>Notes </h1>
                <button onClick={onAddNote}> Add </button>
            </div>
            <div className="app-sidebar-notes">
                {notes.map((note) => (
                    <div className={`app-sidebar-note ${note.id === activeNote && "active"}`} onClick={ () => setActiveNote(note.id)}>
                        <div className="sidebat-note-title">
                            <strong>{note.title}</strong>
                            <button onClick={ () => onDeleteNote(note.id)}>Delete</button>
                        </div>
                        <p>{note.body && note.body.substr(0,100)+'...'}</p>
                        <small className="note-meta">
                            Last modified {new Date(note.lastModified).toLocaleDateString("uk-UA", {
                                 hour: "2-digit",
                                 minute: "2-digit"
                            })}
                        </small>
                    </div>
                ) )};

            </div>
        </div>
    );
}

export default Sidebar;