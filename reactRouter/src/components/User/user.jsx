import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {userid} = useParams()
    return(
        <div className="text-white bg-gray-700 p-5 m-5 text-center text-4xl">User:{userid}</div>
    )
}

export default User