import React from 'react';


const Sidebar = ({ notes, activeNote, setActiveNote }) => {
    return (
        <div className="app-sidebar">

            
            <div className="app-sidebar-notes">
                {notes.map((note) => (
                    <div 
                    className={`app-sidebar-note ${note.id === activeNote && "active"}`} 
                    onClick={ () => setActiveNote(note.id)}
                    >
                        <div className="sidebat-note-title">
                            <strong>{note.title}</strong>
                            
                        </div>
                        <p>{note.body && note.body.substr(0,100)+"..."}</p>
                        <small className="note-meta">
                            Last modified {new Date(note.lastModified).toLocaleDateString("uk-UA", {
                                 hour: "2-digit",
                                 minute: "2-digit"
                            })}
                        </small>
                    </div>
                ) )}

            </div>
        </div>
    );
}

export default Sidebar;