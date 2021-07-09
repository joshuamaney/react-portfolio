import React from "react";
// import { Link } from "react-router-dom";
// import "./style.css";

function Navbar() {
    return (
        <nav class="navbar navbar-light bg-light">
            <form class="container-fluid justify-content-start">
                <button class="btn btn-outline-success me-2" type="button">Home</button>
                <button class="btn btn-sm btn-outline-secondary" type="button">About</button>
                <button class="btn btn-sm btn-outline-secondary" type="button">Projects</button>
            </form>
        </nav>
    )
}

export default Navbar;