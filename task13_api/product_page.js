import React,{useEffect,useState} from "react";
import "./productpage.css";
import "bootstrap/dist/css/bootstrap.css";
import { Menu } from "../menu/menu";
import { Link } from "react-router-dom";
// import StarRatings from "react-star-ratings";

export function Api(){
    const[Product,setProduct]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products') 
        .then(data=>data.json())
        .then(da=>setProduct(da))
    })

    return(
        <>
        
        <div className="container-fluid">
            <div className="row col-lg-12 justify-content-between">
        {
            Product.map((value,index)=>
            <>
            <div className="card col-lg-3 m-2">
                <div className="card-body bg-secondary">
                    <img src={value.image} className="col-lg-12"/>
                    <h3>{value.id}.{value.title}</h3>
                    <h6>{value.price}</h6>
                    <Link to={`/Prod/${value.id}`}><button className="btn text-light bg-dark">View More</button></Link>
                
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