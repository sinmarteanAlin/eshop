import React from 'react';
import './css/style.css';

const PageSectionBanner = (props) => {
    return (
        <div className="container-fluid page-section-banner-container">
            <div className="row">
                <div className="col-lg-3 offset-lg-1">
                    {props.pageTitle}
                </div>
            </div>
        </div>
    );
}
export default PageSectionBanner;