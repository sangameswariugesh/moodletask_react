import React from "react"
import './result.css';
import { Link } from "react-router-dom";
import Menu from "../menu/menu";
export function Result(){
return(
    <>
    
<div className="container-fluid pink">
            <div className="row p-3">
                <div className="col-lg-3"></div>
                <div className="text-center col-lg-6 bg-light bdr my-5 p-5">
                    <div className="p-5">
                        <Link to='/Back' className="badge"><h1 className="display-2">&#128062;</h1><h1 className="text-danger">THANK YOU</h1></Link>
                    </div>
                    <div className="px-5">
                        <h4>We will use your feedback to improve our customer support performance.</h4>
                    </div> 
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
        </>
        );}