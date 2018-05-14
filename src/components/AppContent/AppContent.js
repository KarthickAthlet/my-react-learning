import React, { Component } from 'react';
import Prism from 'prismjs';
import AppSiderbar from '../AppSiderbar/AppSiderbar'
import './AppContent.css'

// The code snippet you want to highlight, as a string
// let 

// Returns a highlighted HTML string
// let html = Prism.highlight(code, Prism.languages.javascript);
// console.log(html);

class AppContent extends Component {
    constructor() {
        super();
        this.code = `npm install -g create-react-app
create-react-app my-app
        
cd my-app
npm start`;
    }

    render() {
        return (
            <div className="AppContent">
                <section>
                    <h2 id="assumptions">
                        Installation Procedure
                    </h2>
                    <pre className=" language-bash">
                        <code className=" language-bash">
                            {Prism.highlight(this.code, Prism.languages.markup)}
                        </code>
                    </pre>



                </section>
            </div >
        );
    }
}

export default AppContent;
