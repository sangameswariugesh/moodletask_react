import React from "react";
import './social.css'; 
import Menu from "../menu/menu";
export function Social(){
    return(
    <>
    {/* <FontAwesomeIcon icon={FaSymbol}/> */}
    <div className="so text-center" id="sang3">   
    <h1 className="text-white">Social buttons</h1>   
    <input type="button" value="like" className="btn1"/>
    <input type="button" value="comment" className="btn2"/>
    <input type="button" value="share" className="btn3"/>
    </div>
    </>
    );
}
export default Social