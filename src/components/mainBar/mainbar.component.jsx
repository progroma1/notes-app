import React, { useState } from 'react';
import Search from '../search/search.component';
import DropDown from '../dropDown/dropdown.component';

const Mainbar = ({activeNote}) => {
    return (
        <div className="main">
            <div className="main-header">
                <div className="add-button">
                    <img  className="addbutton-img" src="img/addButton.png" alt="tabs"/>
                </div>
                <div className="dropdown-panel">
                    <DropDown />
                </div>
                <div className="search-panel">
                    <Search />
                </div>
                 
            </div>
            <div className="main-edit-panel">
                <div className="app-main-note-edit">
                    <input type="text" id="title" value={activeNote.title} autoFocus placeholder="Write your title... " />
                    <textarea name="" id="body" cols="30" rows="5" placeholder="Write your notes here..." value={activeNote.body}></textarea>
                </div>
                <div className="app-main-note-preview">
                    <h1 className="preview-title">{activeNote.title}</h1>
                    <div className="markdown-preview">
                    {activeNote.body}
                    </div>
                </div>
            </div>
        
        </div>
        
    );
}

export default Mainbar;