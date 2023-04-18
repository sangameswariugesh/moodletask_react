import React from "react";
import  './json.css';
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { useEffect } from "react";
import Menu from "../menu/menu";


export function Clothstype(){
    const[cloths,setcloths]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/Cloths.json')
        .then(data=>data.json())
        .then(da=>setcloths(da))
    })
      return(
      
        <>
         <h1 className="text-center text-primary">FABRIC HUB</h1> 
                <div className="container-fluid cloth-bg" id="sang10">
                    <div className="row">
                       
        {
            cloths.map((value,index)=>
                <>
                        <div class="card col-lg-4 cloth-card" >
                            <img src={value.cloth_img} className="card-img-top cloth_img" alt="..." />
                            <div className="card-body  text-">
                            <h5 className="card-title text-">{value.cloth_name}</h5>
                            <p className="card-text text-">{value.des}</p>
                            <h6 className="card-text"><span className="">Price: </span>{value.rate}</h6>
                            <h6 className="card-text"><span className="cloth"> Rating: </span>{value.star_rating}</h6>
                            <a href={value.link} class="btn-text-center">About me</a>
                            </div>
                        </div> 
                               
                </>
            )
        }
        </div>
    </div>
        </>
    );
}