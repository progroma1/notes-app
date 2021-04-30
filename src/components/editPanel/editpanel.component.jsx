import React from 'react';
const EditPanel = ({activeNote, onUpdateNote}) => {

    const onEditField = (key,value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now()
        });
    }


    if (!activeNote) return (
        <div>
            <div className="no-active-note">
                No note selected
            </div>
        </div>
    )



    return (
        <div className="main-edit-panel">
                <div className="app-main-note-edit">
                    <input 
                    type="text" 
                    id="title" 
                    value={activeNote.title}
                    onChange={ (e) => onEditField("title", e.target.value)}
                    autoFocus
                    placeholder="Write your title... " />
                    <textarea name="" id="body" rows="5" placeholder="Write your notes here..." 
                    value={activeNote.body}
                    onChange={ (e) => onEditField("body", e.target.value)}
                    ></textarea>
                </div> 
        </div>
    )
}

export default EditPanel;