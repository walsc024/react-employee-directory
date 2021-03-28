import React, {Component} from "react";
import "../styles/Header.css";

// header component
export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Employee Management System</h1>
                <h3>Use search box to filter employees</h3>
            </div>
        )
    }
}