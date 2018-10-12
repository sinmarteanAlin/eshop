import React from 'react';
import './css/style.css';
import FirstRow from './FirstRow';
import SecondRow from './SecondRow';
import ThirdRow from './ThirdRow';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row upper-footer">
                    <FirstRow />
                    <SecondRow />
                    <ThirdRow />
                </div>
                <div className="row lower-footer">
                    <div className="col-lg-6 col-md-12 copyright">
                        Copyright © All rights reserved.
                    </div>
                    <div className="col-lg-6 col-md-12 author">
                        eCommerce Gem by Sinmartean Alin
                    </div>

                </div>
            </div>
        </footer>
    );
} 

export default Footer;