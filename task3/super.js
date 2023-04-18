import React from "react";
import './super.css';
import img1 from './csk-img.png'
import img2 from'./rcb-img.png'
import Menu from "../menu/menu";
export function View(){
    return(
    <>
    <div className="row p-5 bg-dark" id="sang2">
            <div className="col-lg-3"></div>
            <div className="text-center p-5 col-lg-6">
                <div>
                <h1 className="text-white text-center">Super Over League</h1>
                </div>
                <div>
                <img src={img1} width="200px"/>
                <img src={img2} width="200px"/>
                </div>
            </div>
    </div>   
    </>
    );

}
export default View