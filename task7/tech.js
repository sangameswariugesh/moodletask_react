import React from "react";
import './tech.css';
import Menu from "../menu/menu";
import img from './data1.jpg';
import img1 from './data2.png';
import img2 from './data3.png';
import img3 from './data4.jpg';
export function Technology(){
return(
    <>
        <div className="container-fluid" id="sang6">
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <div className="container-fluid col-lg-12 text-center">
                        <h1>Learn 4.0 Technologies</h1>
                        <p>Generally-speaking, Industry 4.0 describes the growing trend towards automation and data exchange in technology and processes within the manufacturing industry, including.</p>
                    </div>
                    <div className="container-fluid row">
                        <div className="col-lg-6 card-body ca1">
                            <h3 className="card-title">Data Scientist</h3>
                            <p className="card-text">A data scientist's role combines computer science, statistics, and mathematics to collect and organize data .</p>
                            <img src={img} className="im col-lg-4"/>
                        </div> 
                        <div className="col-lg-6 card-body ca2">
                            <h3 className="card-title">Developer</h3>
                            <p className="card-text">Developers, also known as software developers or computer programmers, are responsible for developing.</p>
                            <img src={img1} className="im col-lg-4"/>
                        </div>         
                    </div>
                    <div className="container-fluid row">
                        <div className="col-lg-6 card-body ca3">
                            <h3 className="card-title">VR Developer</h3>
                            <p className="card-text">Virtual reality and augmented reality developers are the creative minds behind extended reality programs.</p>
                            <img src={img2} className="im col-lg-4"/>
                        </div> 
                        <div className="col-lg-6 card-body ca4">
                            <h3 className="card-title">ML Engineer</h3>
                            <p className="card-text">A machine learning engineer (ML engineer) is a person in IT who focuses on researching, building and designing self-running.</p>
                            <img src={img3} className="im col-lg-4"/>
                        </div>         
                    </div>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    </>
    );
}

export default Technology