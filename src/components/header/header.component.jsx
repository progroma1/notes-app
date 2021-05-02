import React from 'react';
import { Link } from 'react-router-dom';

import Search from '../search/search.component';
import DropdownButton from '../dropDown/dropdown.component';


const Header = ({onDeleteNote, activeNote, onAddNote, term, searchKeyword, notes}) => {
    
    return (
        <div className="header">
            <div className="app-sidebar-header">
                
                    <div className="list-view">
                        <Link to='/list-view'>
                            <img className="sidebar-img" src="img/sidebar-list.png" alt="list"/>
                        </Link>                      
                    </div>

                    <div className="gallery-view">
                        <Link to='/gallery-view'> 
                            <img  className="sidebar-img" src="img/sidebar-tabs.png" alt="tabs"/>
                        </Link>
                        
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



                
                    <DropdownButton
                    
                    />
                </div>
                <div className="search-panel">
                    <Search 
                    term={term}
                    searchKeyword={searchKeyword}
                    notes={notes}
                    />
                </div>  
            </div>

        </div>
        

    )
}


export default Header;