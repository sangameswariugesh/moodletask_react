import React, { useEffect, useState } from "react";
import "./productpage.css";
import "bootstrap/dist/css/bootstrap.css";
import { Menu } from "../menu/menu";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ReactWeather } from "react-open-weather";

export function Prod() {
    const [Product, setProduct] = useState([]);
    const { id } = useParams()
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' + id)
            .then(data => data.json())
            .then(da => setProduct(da))
    })

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={Product.image} className="col-lg-12 p-5" />
                    </div>
                    <div className="col-lg-6 p-5">
                        <h3>{Product.title}</h3>
                        <h6>{Product.description}</h6>
                        <h6>{Product.price}</h6>
                        <h6>{Product.category}</h6>
                    </div>
                </div>
            </div>
            
        </>
    );
}