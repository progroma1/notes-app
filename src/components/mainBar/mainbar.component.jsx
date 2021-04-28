import React, { Component } from 'react';
import Search from '../search/search.component';
import DropDown from '../dropDown/dropdown.component';

const Mainbar = () => {
    return (
        <div>
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
           
        </div>
        
    );
}

export default Mainbar;