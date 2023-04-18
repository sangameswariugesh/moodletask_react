import React from "react";
import Menu from "../menu/menu";
import './card.css';
import img1 from './congrats-card-profile-img.png'
import img2 from'./congrats-card-watch-img.png'
export function Card(){
    return(
<>
<Menu/>
<div className="container-fluid bg-img" id="sang1">
    <h1 className="text-center">Congratulations</h1>
    <div className="row">
        <div className="col-lg-4"></div> 
            <div className="col-lg-4 bg-clr text-center">
                 <img src={img1}/>
                 <h2>Sangameswari.c</h2>
                 <p>Sangameswari Institution Of Computer Education And Technoligies,Bangalore</p>
                 <img src={img2}/>
        </div>
        <div className="col-lg-4"></div>  
    </div>
</div>
</>
    );
}
export default Card