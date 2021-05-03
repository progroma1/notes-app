import React, { useState } from 'react';

const DropdownButton = () => {
const [isOpen, setIsOpen] = useState(false);
const onButtonClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="dropdown-button-wrapper">
            <div className="list-view" onClick={ (e) => e.currentTarget && onButtonClick() }>
                <img className="sidebar-img" src="img/dropdown.png" alt="list"/>              
            </div>
            {isOpen && (
                <div className="dropdown-list-wrapper opened">
                    <ul className="dropdown-list">
                        <li className="dropdown-list-item">
                            <img className="dropdown-list-img" src="img/mail.png" alt="list"/>
                            Пошта
                        </li>
                        <li className="dropdown-list-item">
                            <img className="dropdown-list-img" src="img/airdrop.png" alt="list"/>
                            AirDrop
                        </li>
                        <li className="dropdown-list-item">
                            <img className="dropdown-list-img" src="img/messages.png" alt="list"/>
                            Повідомлення
                        </li>
                        <li className="dropdown-list-item">
                            <img className="dropdown-list-img" src="img/notes.png" alt="list"/>
                            Нагадування
                        </li>
                        <li className="dropdown-list-item">
                            <img className="dropdown-list-img" src="img/more.png" alt="list"/>
                            Більше
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
};

export default DropdownButton;
