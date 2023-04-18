import React from "react";
import './login.css';
import img from './img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Menu from "../menu/menu";
export function Log(){
    return(
<>
<div className="ma container-fluid" id="sang5">
   <div className="ma2 text-center">
       <div className="row">
             <div className="col-lg-6 mb-4">
                <img src={img}className=" mt-5"/>
            </div>
            <div className="col-lg-6 text-center">
            <h3 className="mt-4">Member login</h3><br/>
            <div><span className="in2"><FontAwesomeIcon icon={faEnvelope} /><input type="email" className="in my-2" placeholder="email"/></span></div>
            <div><span className="in2"><FontAwesomeIcon icon={faLock} /><input type="password" className="in my-2" placeholder="password"/></span></div>
            <div><input type="button" className="in1 my-2" value="log in" placeholder=""/></div>
            <p>Forgot<span className="s"> User Name /password?</span></p>
            <p className="s">Create Your Account <FontAwesomeIcon icon={faArrowRight} /></p>
            </div>
        </div>
    </div>
</div>
</>
    );
}