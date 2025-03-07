import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Detail() {
    const location = useLocation();
    const navigate = useNavigate();

    console.log(location.state)

    useEffect(() => {
        if (location.state === null) {
            navigate("/");
        }
    })
    if (location.state) {
        const { title } = location.state;
        return <span>{title}</span>
    }
    return null;
}
export default Detail;