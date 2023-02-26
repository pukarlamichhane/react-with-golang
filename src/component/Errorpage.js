import React from "react";
import { useRouteError } from "react-router-dom";

export default function Errorpage(){
    const error=useRouteError();
    return( 
        <>
        <div className="container">
            <div className="rows">
                <div className="col-md-6">
                    <h1>Opps</h1>
                    <p>Error have occur</p>
                </div>

            </div>

        </div>
        </>
    )
}