import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-light navbar-bg">
            <a className="sidebar-toggle">
                <i className="hamburger align-self-center"></i>
            </a>
            <div className="navbar-collapse collapse">
                <ul className="navbar-nav navbar-align">
                    <li className="nav-item dropdown">
                        <a className="nav-icon dropdown-toggle" href="#" id="alertsDropdown">
                            <i className="align-middle" data-feather="bell"></i>
                            <span className="indicator">4</span>
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown">
                            <img src="img/avatars/avatar.jpg" className="avatar img-fluid rounded me-1" alt="User" />
                            <span className="text-dark">Charles Hall</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
