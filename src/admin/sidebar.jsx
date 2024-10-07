import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <nav id="sidebar" className="sidebar">
            <div className="sidebar-content">
                <a className="sidebar-brand" href="/">
                    <span className="align-middle">AdminKit</span>
                </a>
                <ul className="sidebar-nav">
                    <li className="sidebar-header">Pages</li>
                    <li className="sidebar-item active">
                        <a className="sidebar-link" href="/">
                            <i className="align-middle" data-feather="sliders"></i> 
                            <span className="align-middle">Dashboard</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a className="sidebar-link" href="/profile">
                            <i className="align-middle" data-feather="user"></i> 
                            <span className="align-middle">Profile</span>
                        </a>
                    </li>
                    {/* Add more sidebar items */}
                </ul>
                <div className="sidebar-cta">
                    <div className="sidebar-cta-content">
                        <strong className="d-inline-block mb-2">Upgrade to Pro</strong>
                        <div className="mb-3 text-sm">More components in premium version.</div>
                        <a href="/upgrade" className="btn btn-primary">Upgrade to Pro</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;
