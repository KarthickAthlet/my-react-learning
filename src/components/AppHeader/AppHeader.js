import React, { Component } from 'react';
import './AppHeader.css'

class AppHeader extends Component {
    render() {
        return (
            <div className="AppHeader">
                <header>
                    <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top ">
                        <button className="navbar-toggler navbar-toggler-right hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand" href="#">React Docs</a>
                        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                            <form className="form-inline mt-2 mt-md-0">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            </form>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default AppHeader;
