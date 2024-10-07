import React from 'react';
import './DashboardCard.css';

const DashboardCard = ({ title, value, icon, percentage, status }) => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col mt-0">
                        <h5 className="card-title">{title}</h5>
                    </div>
                    <div className="col-auto">
                        <div className={`stat text-${status}`}>
                            <i className={`align-middle ${icon}`}></i>
                        </div>
                    </div>
                </div>
                <h1 className="mt-1 mb-3">{value}</h1>
                <div className="mb-0">
                    <span className={`text-${status}`}> <i className="mdi mdi-arrow-bottom-right"></i> {percentage}% </span>
                    <span className="text-muted">Since last week</span>
                </div>
            </div>
        </div>
    );
}

export default DashboardCard;
