import React from 'react';

const Gallery = ({ notes, activeNote, setActiveNote } ) => {

    return (
                <div className="gallery-view">
                    <div className="gallery-notes">
                        {notes.map((note) => (

                    <div 
                    className={`app-gallery-note ${note.id === activeNote && "active-in-gallery"}`} 
                    onClick={ 
                        () => {
                            console.log('Wanna create a note')
                            setActiveNote(note.id);
                        }
                     }
                    >
                        <div className="app-gallery-text">
                            <p>{note.body && note.body.substr(0,350)+"..."}</p>
                        </div>

                            <div className="gallery-note-title">
                                <strong>{note.title}</strong>
                            </div>
                            <div className="hour-exc">
                                <small className="note-meta">
                                    {new Date(note.lastModified).toLocaleTimeString("uk-UA", {
                                     hour: "2-digit",
                                    minute: "2-digit"
                                })}
                                </small>
                            </div>
                    </div>   
                ) )}

            </div>
        </div>  
    );
}

export default Gallery;