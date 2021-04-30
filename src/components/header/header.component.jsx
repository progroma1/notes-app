import React from 'react';
import Search from '../search/search.component';
import DropDown from '../dropDown/dropdown.component';


const Header = ({onDeleteNote, activeNote, onAddNote, listView, galleryView}) => {
    return (
        <div className="header">
            <div className="app-sidebar-header">
                    <div className="list-view">
                        <img className="sidebar-img" src="img/sidebar-list.png" alt="list"/>
                    </div>
                    <div className="list-view">
                        <img  className="sidebar-img" src="img/sidebar-tabs.png" alt="tabs"/>
                    </div>
                    <div className="sidebar-remove" onClick={() => onDeleteNote(activeNote)}>
                        <img  className="sidebar-img" src="img/sidebar-remove.png" alt="remove"/>
                    </div>
            </div>
            <div className="main-part-header">
                <div className="add-button" onClick={onAddNote}>
                    <img  className="addbutton-img" src="img/addButton.png" alt="tabs"/>
                </div>
                <div className="dropdown-panel">
                    <DropDown />
                </div>
                <div className="search-panel">
                    <Search />
                </div>  
            </div>

        </div>
        

    )
}


export default Header;