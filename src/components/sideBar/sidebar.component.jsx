import React from 'react';


const Sidebar = ({ activeNote, setActiveNote, filteredNotes }) => {
    return (
        <div className="app-sidebar">
            <div className="app-sidebar-notes">
                {filteredNotes.map((note) => (
                    <div 
                    className={`app-sidebar-note ${note.id === activeNote && "active"}`} 
                    onClick={ () => setActiveNote(note.id)}
                    >
                        <div className="sidebat-note-title">
                            <strong>{note.title}</strong>
                        </div>
                        <div className="hour-exc">
                            <small className="note-meta">
                                {new Date(note.lastModified).toLocaleTimeString("uk-UA", {
                                 hour: "2-digit",
                                 minute: "2-digit"
                                })}
                            </small>
                            <p>{note.body && note.body.substr(0,35)+"..."}</p>
                        </div>   
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Sidebar;