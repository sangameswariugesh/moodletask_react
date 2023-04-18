import React from "react";
import'./feed.css'
import { Link } from "react-router-dom";
import Menu from "../menu/menu";
export function Back(){
    return( 
        <>
         <div className="container-fluid pink" id="sang9">
            <div className="row p-3">
            <div className="col-lg-3"></div>
            <div className="text-center col-lg-6 bg-light my-5 p-5 bdr">
                <div className="">
                    <h4>How satisfied are you customer support performance.</h4>
                </div>
                <div className="d-flex flex-row justify-content-around py-5">
                    <Link to='/Result' className="badge"><h1 className="display-3">&#128532;</h1><h1 className="">Sad</h1></Link>
                    <Link to='/Result' className="badge"><h1 className="display-3">&#128528;</h1><h1 className="">None</h1></Link>
                    <Link to='/Result' className="badge"><h1 className="display-3">&#128512;</h1><h1 className="">Happy</h1></Link>
                </div>
            </div>
            <div className="col-lg-3"></div>
            </div>
        </div>

        {/* <div className="gd container fluid row">
            <div className="row p-3>   
         <div className="col-lg-6 bg-light">
        <h1 className="col-lg-12">How Satisfied are you with our customer Support performance</h1>
        <div>
         <span className=" s">&#128532;</span>
         <span className="s">&#128528;</span>
         <span className="s">&#128512;</span>
         </div>
         <div>
            <p className="ml-5 p-2">Sad<span className="ml-5 p-2">None</span><span  className="ml-5 p-2">Happy</span></p>
         </div>
         </div>
         <div className="col-lg-3"></div>
             </div>

            
        </div> */}
        </>
    );
}
export default Back