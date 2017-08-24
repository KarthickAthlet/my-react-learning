import React, { Component } from 'react';
import AppSiderbar from '../AppSiderbar/AppSiderbar'
import AppContent from '../AppContent/AppContent'
import './AppBody.css'

class AppBody extends Component {
    render() {
        return (
            <div className="Appbody">
                <section>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-2 col-md-2">
                                <div className="row">
                                    <AppSiderbar />
                                </div>
                            </div>
                            <div className="col-sm-10 col-md-10">
                                <AppContent />
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        );
    }
}

export default AppBody;
