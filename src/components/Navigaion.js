import React from "react";
import { Link } from "react-router-dom"

function Navigaton() {
    return <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>
}

export default Navigaton;