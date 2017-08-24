import React, { Component } from 'react';
import './AppSiderbar.css';

class AppSiderbar extends Component {
    render() {
        return (
            <div className="AppSiderbar">
                <nav className="hidden-xs-down bg-faded sidebar" >
                    <ul className="nav nav-pills flex-column">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Installation</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Why React?</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Virtual DOM concept</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Introducing JSX</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Component Creation</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Component Lifecycle</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Props and State</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Handling Events</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Stateful and stateless component</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Ajax</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">React Router</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Lists and Keys</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Conditional Rendering</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Forms</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Lifting State Up</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Thinking In React</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Composition vs Inheritance</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">JSX In Depth</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Typechecking With PropTypes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Refs and the DOM</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Uncontrolled Components</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Optimizing Performance</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">React Without ES6</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">React Without JSX</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Reconciliation</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Context</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Web Components</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Higher-Order Components</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Integrating with Other </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Libraries</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Accessibility</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default AppSiderbar;
