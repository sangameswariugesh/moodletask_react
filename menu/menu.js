import React from "react";
import './menu.css';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle';
export function Menu() {
    return (
        <>

       <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
  </div>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                   <Link to='/'><li className="nav-link">Hello</li></Link>
                   <Link to='Card'><li className="nav-link">Card</li></Link>
                   <Link to="View"><li className="nav-link">Super</li></Link>
                   <Link to="Social"><li className="nav-link">Social</li></Link>
                   <Link to="Con"><li className="nav-link">icon</li></Link>
                   <Link to="Log"><li className="nav-link">login</li></Link>
                   <Link to="Technology"><li className="nav-link">tech</li></Link>
                   <Link to="Add"><li className="nav-link">ustate</li></Link>
                   <Link to="Eat"><li className="nav-link">fruit</li></Link>
                   <Link to="Back"><li className="nav-link">feed</li></Link>
                   {/* <Link to="Clothstype"><li className="nav-link">json</li></Link> */}
                   <Link to="Api"><li className="nav-link">product_page</li></Link>
                   {/* <Link to="Prod"><li className="nav-link">product_detail</li></Link> */}
                   <Link to="Dateadd"><li className="nav-link">date</li></Link>
                   <Link to="Climate"><li className="nav-link">weather</li></Link>
                   <Link to="Clock"><li className="nav-link">time</li></Link>
                   <Link to="Layout"><li className="nav-link">layout</li></Link>
                </ul>
               
                
            </div>
            <div>
                <h6>My Work</h6>
                <h6>Sangameswari.c</h6>
            </div>
            </nav>
        </>
    );
}
export default Menu