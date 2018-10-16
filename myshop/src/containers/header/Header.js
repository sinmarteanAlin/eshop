import React, { Component } from 'react';
import './css/style.css';
import LeftSideHeader from '../../components/header/upperHeader/LeftSideHeader';
import RightSideHeader from '../../components/header/upperHeader/RightSideHeader';
import Title from '../../components/header/lowerHeader/Title';
import Navigation from '../../components/header/lowerHeader/navigation/Navigation';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid header">
                <div className="row upper-header">
                    <div className="col-lg-6">
                        <LeftSideHeader />
                    </div>
                    <div className="col-lg-6">
                        <RightSideHeader />
                    </div>
                </div>
                <div className="row lower-header">
                    <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-12 col-xs-12 left-side-title">
                        <Title />
                    </div>
                    <div className="col-lg-7 offset-lg-1 col-md-6 col-sm-12 col-xs-12 menu-wrapper">
                        
                        <Navigation />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;