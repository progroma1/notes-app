import React from 'react';


const Sidebar = () => {
    return (
        <div className="app-sidebar">
            <div className="app-sidebar-header">
                <div className="sidebar-options">
                    <img className="sidebar-img" src="img/sidebar-list.png" alt="list"/>
                    <img  className="sidebar-img" src="img/sidebar-tabs.png" alt="tabs"/>
                </div>
                <div className="sidebar-remove">
                    <img  className="sidebar-img" src="img/sidebar-remove.png" alt="remove"/>
                </div>
                
            </div>
            <div className="app-sidebar-list">

            </div>
        </div>
    );
}

export default Sidebar;