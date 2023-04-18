import React from "react";
import './icon.css';
import Menu from "../menu/menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
export function Con(){
    return(
        <>
       <div className="container-fluid" id="sang4">
       <h1 className="text-center">Notification</h1>
        <div className="row">
            <div className="st bg-primary col-lg-12 m-3 text-center text-white"><p><FontAwesomeIcon icon={faCircleInfo}/>information Massage</p> </div>
            <div className=" st bg-success col-lg-12 m-3 text-center text-white"><p><FontAwesomeIcon icon={faCircleInfo}/>Success Massage</p></div>
            <div className=" st bg-warning col-lg-12 m-3 text-center text-white"><p><FontAwesomeIcon icon={faCircleInfo}/>Warrning Massage</p></div>
            <div className=" st bg-danger col-lg-12 m-3 text-center text-white"><p><FontAwesomeIcon icon={faCircleInfo}/>Error massage</p></div>
        </div>
       </div>
       </>
    );
}
export default Con