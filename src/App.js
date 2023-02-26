import React from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
    return(
        <>
       <div className="container">
        <div className="row">
            <div className="col">
                <h1 className="mt-3"> Go Watch the Movies</h1>
            </div>
            <div className="col text-end">
                <Link to="/login"><span className="badge bg-success">Login</span></Link>
            </div>
            <hr className="mb-3"></hr>
        </div>
        <div className="row">
            <div className="col-md-2">
                <nav>
                    <div className="list-group">
                        <Link to="/" className="list-group-item list-group-items-action">Home</Link >
                        <Link  to="/movies" className="list-group-item list-group-items-action">Movies</Link >
                        <Link  to="/genres" className="list-group-item list-group-items-action">Genres</Link >
                        <Link to="/admin/movies/0" className="list-group-item list-group-items-action">Add movie</Link >
                        <Link to="/manage-catagoe" className="list-group-item list-group-items-action">Manage catagoe</Link >
                        <Link  to="graphql" className="list-group-item list-group-items-action">Graphql</Link>
                        

                        
                    </div>
                </nav>
                
            </div>
            <div className="col-md-10">
                <Outlet></Outlet>
            </div>
        </div>
       </div>
        </>
    )
}

export default App;